import { Request, Response, NextFunction } from 'express';
import * as UsersService from '../services/users.service';
import { sendResponse } from '../utils/response.util';

export const getUserss = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await UsersService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getUsersById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await UsersService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Users not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await UsersService.create(req.body);
    sendResponse(res, 201, item, 'Users created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UsersService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Users deleted successfully');
  } catch (error) {
    next(error);
  }
};