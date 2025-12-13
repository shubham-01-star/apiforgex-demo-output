import { Request, Response, NextFunction } from 'express';
import * as BorrowingService from '../services/borrowing.service';
import { sendResponse } from '../utils/response.util';

export const getBorrowings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await BorrowingService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getBorrowingById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BorrowingService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Borrowing not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createBorrowing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BorrowingService.create(req.body);
    sendResponse(res, 201, item, 'Borrowing created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteBorrowing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await BorrowingService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Borrowing deleted successfully');
  } catch (error) {
    next(error);
  }
};