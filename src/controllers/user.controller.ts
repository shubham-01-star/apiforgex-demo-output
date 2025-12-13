import { Request, Response, NextFunction } from 'express';
import * as UserService from '../services/user.service';
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
    const item = await UserService.findOneByUsername(req.params.username); // Fixed to use existing method
    if (!item) return sendResponse(res, 404, null, 'User not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.create(req.body); // Fixed to use existing method
    sendResponse(res, 201, user, 'User created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserService.remove(Number(req.params.id)); // Fixed to use existing method
    sendResponse(res, 200, null, 'User deleted successfully');
  } catch (error) {
    next(error);
  }
};