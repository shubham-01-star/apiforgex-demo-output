import { Request, Response, NextFunction } from 'express';
import * as BillService from '../services/bill.service';
import { sendResponse } from '../utils/response.util';

export const getBills = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await BillService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getBillById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BillService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Bill not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createBill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BillService.create(req.body);
    sendResponse(res, 201, item, 'Bill created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteBill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await BillService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Bill deleted successfully');
  } catch (error) {
    next(error);
  }
};