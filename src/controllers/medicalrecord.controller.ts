import { Request, Response, NextFunction } from 'express';
import * as MedicalRecordService from '../services/medicalrecord.service';
import { sendResponse } from '../utils/response.util';

export const getMedicalRecords = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await MedicalRecordService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getMedicalRecordById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await MedicalRecordService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'MedicalRecord not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createMedicalRecord = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await MedicalRecordService.create(req.body);
    sendResponse(res, 201, item, 'MedicalRecord created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteMedicalRecord = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await MedicalRecordService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'MedicalRecord deleted successfully');
  } catch (error) {
    next(error);
  }
};