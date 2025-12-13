import { Request, Response, NextFunction } from 'express';
import * as usersService from '../services/users.service';
import { sendResponse } from '../utils/response.util';

export const getuserss = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await usersService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getusersById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await usersService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'users not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createusers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await usersService.create(req.body);
    sendResponse(res, 201, item, 'users created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteusers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await usersService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'users deleted successfully');
  } catch (error) {
    next(error);
  }
};