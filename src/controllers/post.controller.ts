Here is the updated code snippet:

```typescript
// In src/services/post.service.ts around lines 14-23 (and similarly for deletePost)
export const findById = async (id: number): Promise<Post> => {
  try {
    return await Post.findOne({ where: { id } });
  } catch (error) {
    throw new Error(`Error finding post with id ${id}: ${error.message}`);
  }
};

// In src/controllers/post.controller.ts around lines 14-23 (and similarly for deletePost)
export const getPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) return sendResponse(res, 400, null, 'Invalid post id');

    const item = await PostService.findById(id);
    if (item) {
      // Return the post
      res.json(item);
    } else {
      // Return a 404 response if no post is found
      sendResponse(res, 404, null, 'Post not found');
    }
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) return sendResponse(res, 400, null, 'Invalid post id');

    const item = await PostService.findById(id);
    if (item) {
      // Call Prisma's remove method to delete the post
      await Post.remove(item);
      // Return a success response
      sendResponse(res, 200, null, 'Post deleted successfully');
    } else {
      // Return a 404 response if no post is found
      sendResponse(res, 404, null, 'Post not found');
    }
  } catch (error) {
    next(error);
  }
};
```

And the updated `sendResponse` function to handle success responses:

```typescript
// In src/utils/response.ts
export const sendResponse = <T>(res: Response, statusCode: number, data?: T, message?: string): void => {
  if (statusCode === 200) {
    res.json(data);
  } else {
    res.status(statusCode).json({ success: false, error: { code: statusCode.toString(), message }, data });
  }
};
```