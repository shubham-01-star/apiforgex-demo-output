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
    const item = await UserService.findOneByUsername(req.params.username);
    if (!item) return sendResponse(res, 404, null, 'User not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.create(req.body);
    sendResponse(res, 201, user, 'User created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'User deleted successfully');
  } catch (error) {
    next(error);
  }
};

export const findUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await UserService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'User not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const findAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await UserService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.update(Number(req.params.id), req.body);
    sendResponse(res, 200, user, 'User updated successfully');
  } catch (error) {
    next(error);
  }
};

export const removeUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'User deleted successfully');
  } catch (error) {
    next(error);
  }
};