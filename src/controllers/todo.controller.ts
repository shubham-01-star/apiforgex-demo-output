import { Request, Response, NextFunction } from 'express';
import * as todoService from '../services/todo.service';
import { sendResponse } from '../utils/response.util';

export const gettodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await todoService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const gettodoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await todoService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'todo not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createtodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await todoService.create(req.body);
    sendResponse(res, 201, item, 'todo created successfully');
  } catch (error) {
    next(error);
  }
};

export const deletetodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await todoService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'todo deleted successfully');
  } catch (error) {
    next(error);
  }
};