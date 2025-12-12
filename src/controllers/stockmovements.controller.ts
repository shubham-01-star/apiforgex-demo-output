import { Request, Response, NextFunction } from 'express';
import * as StockMovementsService from '../services/stockmovements.service';
import { sendResponse } from '../utils/response.util';

export const getStockMovementss = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await StockMovementsService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getStockMovementsById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await StockMovementsService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'StockMovements not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createStockMovements = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await StockMovementsService.create(req.body);
    sendResponse(res, 201, item, 'StockMovements created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteStockMovements = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await StockMovementsService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'StockMovements deleted successfully');
  } catch (error) {
    next(error);
  }
};