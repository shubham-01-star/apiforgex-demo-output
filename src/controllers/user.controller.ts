import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';
import { sendResponse } from '../utils/response.util';

export const getusers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await userService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getuserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await userService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'user not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createuser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await userService.create(req.body);
    sendResponse(res, 201, item, 'user created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteuser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'user deleted successfully');
  } catch (error) {
    next(error);
  }
};