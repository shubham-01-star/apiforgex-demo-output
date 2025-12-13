import { Request, Response, NextFunction } from 'express';
import * as TodoService from '../services/todo.service';
import { sendResponse } from '../utils/response.util';

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await TodoService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getTodoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await TodoService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Todo not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await TodoService.create(req.body);
    sendResponse(res, 201, item, 'Todo created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await TodoService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Todo deleted successfully');
  } catch (error) {
    next(error);
  }
};