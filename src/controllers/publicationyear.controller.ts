import { Request, Response, NextFunction } from 'express';
import * as PublicationYearService from '../services/publicationyear.service';
import { sendResponse } from '../utils/response.util';

export const getPublicationYears = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await PublicationYearService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getPublicationYearById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await PublicationYearService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'PublicationYear not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createPublicationYear = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await PublicationYearService.create(req.body);
    sendResponse(res, 201, item, 'PublicationYear created successfully');
  } catch (error) {
    next(error);
  }
};

export const deletePublicationYear = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await PublicationYearService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'PublicationYear deleted successfully');
  } catch (error) {
    next(error);
  }
};