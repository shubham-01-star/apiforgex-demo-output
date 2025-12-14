import { Request, Response, NextFunction } from 'express';
import * as TasksService from '../services/tasks.service';
import { sendResponse } from '../utils/response.util';

export const getTaskss = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await TasksService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getTasksById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await TasksService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Tasks not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await TasksService.create(req.body);
    sendResponse(res, 201, item, 'Tasks created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await TasksService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Tasks deleted successfully');
  } catch (error) {
    next(error);
  }
};