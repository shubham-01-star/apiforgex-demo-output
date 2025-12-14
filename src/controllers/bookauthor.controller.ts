import { Request, Response, NextFunction } from 'express';
import * as BookAuthorService from '../services/bookauthor.service';
import { sendResponse } from '../utils/response.util';

export const getBookAuthors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await BookAuthorService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getBookAuthorById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BookAuthorService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'BookAuthor not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createBookAuthor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BookAuthorService.create(req.body);
    sendResponse(res, 201, item, 'BookAuthor created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteBookAuthor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await BookAuthorService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'BookAuthor deleted successfully');
  } catch (error) {
    next(error);
  }
};