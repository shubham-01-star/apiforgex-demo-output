import { Request, Response, NextFunction } from 'express';
import * as AuthorService from '../services/author.service';
import { sendResponse } from '../utils/response.util';

export const getAuthors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await AuthorService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getAuthorById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await AuthorService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Author not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createAuthor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await AuthorService.create(req.body);
    sendResponse(res, 201, item, 'Author created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteAuthor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await AuthorService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Author deleted successfully');
  } catch (error) {
    next(error);
  }
};