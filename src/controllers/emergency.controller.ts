import { Request, Response, NextFunction } from 'express';
import * as EmergencyService from '../services/emergency.service';
import { sendResponse } from '../utils/response.util';

export const getEmergencys = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await EmergencyService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getEmergencyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await EmergencyService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Emergency not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createEmergency = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await EmergencyService.create(req.body);
    sendResponse(res, 201, item, 'Emergency created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteEmergency = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await EmergencyService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Emergency deleted successfully');
  } catch (error) {
    next(error);
  }
};