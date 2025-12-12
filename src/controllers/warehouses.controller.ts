import { Request, Response, NextFunction } from 'express';
import * as WarehousesService from '../services/warehouses.service';
import { sendResponse } from '../utils/response.util';

export const getWarehousess = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await WarehousesService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getWarehousesById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await WarehousesService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Warehouses not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createWarehouses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await WarehousesService.create(req.body);
    sendResponse(res, 201, item, 'Warehouses created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteWarehouses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await WarehousesService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Warehouses deleted successfully');
  } catch (error) {
    next(error);
  }
};