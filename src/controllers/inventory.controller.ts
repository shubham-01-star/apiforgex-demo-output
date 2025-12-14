import { Request, Response, NextFunction } from 'express';
import * as InventoryService from '../services/inventory.service';
import { sendResponse } from '../utils/response.util';

export const getInventorys = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await InventoryService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getInventoryById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await InventoryService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Inventory not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createInventory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await InventoryService.create(req.body);
    sendResponse(res, 201, item, 'Inventory created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteInventory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await InventoryService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Inventory deleted successfully');
  } catch (error) {
    next(error);
  }
};