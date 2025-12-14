import { Request, Response, NextFunction } from 'express';
import * as urlsService from '../services/urls.service';
import { sendResponse } from '../utils/response.util';

export const geturlss = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await urlsService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const geturlsById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await urlsService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'urls not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createurls = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await urlsService.create(req.body);
    sendResponse(res, 201, item, 'urls created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteurls = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await urlsService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'urls deleted successfully');
  } catch (error) {
    next(error);
  }
};