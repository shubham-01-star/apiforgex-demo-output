import { Request, Response, NextFunction } from 'express';
import * as tasksService from '../services/tasks.service';
import { sendResponse } from '../utils/response.util';

export const gettaskss = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await tasksService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const gettasksById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await tasksService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'tasks not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createtasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await tasksService.create(req.body);
    sendResponse(res, 201, item, 'tasks created successfully');
  } catch (error) {
    next(error);
  }
};

export const deletetasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await tasksService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'tasks deleted successfully');
  } catch (error) {
    next(error);
  }
};