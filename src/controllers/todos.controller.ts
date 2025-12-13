import { Request, Response, NextFunction } from 'express';
import * as todosService from '../services/todos.service';
import { sendResponse } from '../utils/response.util';

export const gettodoss = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await todosService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const gettodosById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await todosService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'todos not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createtodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await todosService.create(req.body);
    sendResponse(res, 201, item, 'todos created successfully');
  } catch (error) {
    next(error);
  }
};

export const deletetodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await todosService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'todos deleted successfully');
  } catch (error) {
    next(error);
  }
};