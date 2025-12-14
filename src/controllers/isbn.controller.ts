import { Request, Response, NextFunction } from 'express';
import * as ISBNService from '../services/isbn.service';
import { sendResponse } from '../utils/response.util';

export const getISBNs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await ISBNService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getISBNById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await ISBNService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'ISBN not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createISBN = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await ISBNService.create(req.body);
    sendResponse(res, 201, item, 'ISBN created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteISBN = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await ISBNService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'ISBN deleted successfully');
  } catch (error) {
    next(error);
  }
};