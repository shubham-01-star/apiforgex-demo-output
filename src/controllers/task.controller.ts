import { Request, Response, NextFunction } from 'express';
import taskService from '../services/task.service';

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await taskService.getTasks();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const item = await taskService.getTask(id);
    
    if (!item) return sendResponse(res, 404, null, 'Task not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const item = await taskService.createTask(title, description);
    sendResponse(res, 201, item, 'Task created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await taskService.deleteTask(Number(req.params.id));
    sendResponse(res, 200, null, 'Task deleted successfully');
  } catch (error) {
    next(error);
  }
};