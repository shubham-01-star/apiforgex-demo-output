import { Request, Response, NextFunction } from 'express';
import * as PrescriptionService from '../services/prescription.service';
import { sendResponse } from '../utils/response.util';

export const getPrescriptions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await PrescriptionService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getPrescriptionById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await PrescriptionService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Prescription not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createPrescription = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await PrescriptionService.create(req.body);
    sendResponse(res, 201, item, 'Prescription created successfully');
  } catch (error) {
    next(error);
  }
};

export const deletePrescription = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await PrescriptionService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Prescription deleted successfully');
  } catch (error) {
    next(error);
  }
};