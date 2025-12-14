import { Request, Response, NextFunction } from 'express';
import * as InsuranceService from '../services/insurance.service';
import { sendResponse } from '../utils/response.util';

export const getInsurances = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await InsuranceService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getInsuranceById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await InsuranceService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Insurance not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createInsurance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await InsuranceService.create(req.body);
    sendResponse(res, 201, item, 'Insurance created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteInsurance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await InsuranceService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Insurance deleted successfully');
  } catch (error) {
    next(error);
  }
};