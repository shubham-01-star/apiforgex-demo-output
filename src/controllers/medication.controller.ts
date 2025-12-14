import { Request, Response, NextFunction } from 'express';
import * as MedicationService from '../services/medication.service';
import { sendResponse } from '../utils/response.util';

export const getMedications = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await MedicationService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getMedicationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await MedicationService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Medication not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createMedication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await MedicationService.create(req.body);
    sendResponse(res, 201, item, 'Medication created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteMedication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await MedicationService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Medication deleted successfully');
  } catch (error) {
    next(error);
  }
};