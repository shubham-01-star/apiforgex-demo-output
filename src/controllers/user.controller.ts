export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body || typeof req.body !== 'object') {
      return sendResponse(res, 400, null, 'Invalid request body');
    }
    
    const validatedBody = await validateRequestBody(req.body);
    const item = await UserService.create(validatedBody);
    sendResponse(res, 201, item, 'User created successfully');
  } catch (error) {
    next(error);
  }
};

const validateRequestBody = async (body: any): Promise<any> => {
  try {
    // Use a schema validation library like zod or class-validator
    const { value, error } = await validate(body, zod.object({
      name: zod.string().min(1),
      email: zod.string().email(),
    }));
    if (error) throw new Error('Validation failed:', error);
  } catch (error) {
    return null;
  }
};