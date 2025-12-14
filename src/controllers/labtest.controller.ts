import { Request, Response, NextFunction } from 'express';
import * as LabTestService from '../services/labtest.service';
import { sendResponse } from '../utils/response.util';

export const getLabTests = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await LabTestService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getLabTestById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await LabTestService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'LabTest not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createLabTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await LabTestService.create(req.body);
    sendResponse(res, 201, item, 'LabTest created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteLabTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await LabTestService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'LabTest deleted successfully');
  } catch (error) {
    next(error);
  }
};