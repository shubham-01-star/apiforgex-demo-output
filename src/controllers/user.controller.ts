import { Request, Response, NextFunction } from 'express';
import * as UserService from '../services/user.service';
import { validateId, validateBody } from '../utils/validation.util'; // Import validation utility
import { sendResponse } from '../utils/response.util';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await UserService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validateId(req.params.id); // Validate the ID before proceeding
    const item = await UserService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'User not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validateBody(req.body); // Validate the request body
    const item = await UserService.create(req.body);
    sendResponse(res, 201, item, 'User created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validateId(req.params.id); // Validate the ID before proceeding
    await UserService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'User deleted successfully');
  } catch (error) {
    next(error);
  }
};

// Define a validation utility function to ensure req.params.id is a positive integer
function validateId(id: string) {
  const regex = /^-\d+$/; // Regular expression for negative integers
  if (!regex.test(id)) throw new Error('Invalid ID');
}

// Define an input schema for request body validation
interface RequestBody {
  name: string;
  email: string;
}
const requestBodySchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});

function validateBody(reqBody: any) {
  try {
    const result = requestBodySchema.validate(req.body);
    if (result.error) throw new Error(result.error.details[0].message);
  } catch (error) {
    throw new Error('Invalid request body');
  }
}