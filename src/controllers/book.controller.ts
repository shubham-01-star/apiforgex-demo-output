import { Request, Response, NextFunction } from 'express';
import * as BookService from '../services/book.service';
import { sendResponse } from '../utils/response.util';

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await BookService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BookService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Book not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BookService.create(req.body);
    sendResponse(res, 201, item, 'Book created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await BookService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Book deleted successfully');
  } catch (error) {
    next(error);
  }
};