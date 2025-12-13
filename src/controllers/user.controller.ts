export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body || typeof req.body !== 'object') {
      return sendResponse(res, 400, null, 'Invalid request body');
    }
    
    const item = await UserService.create(req.body);
    sendResponse(res, 201, item, 'User created successfully');
  } catch (error) {
    next(error);
  }
};