import { Request, Response, NextFunction } from 'express';
import * as TaskService from '../services/task.service';
import { sendResponse } from '../utils/response.util';

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await TaskService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await TaskService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Task not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await TaskService.create(req.body);
    sendResponse(res, 201, item, 'Task created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await TaskService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Task deleted successfully');
  } catch (error) {
    next(error);
  }
};