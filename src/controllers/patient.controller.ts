import { Request, Response, NextFunction } from 'express';
import * as PatientService from '../services/patient.service';
import { sendResponse } from '../utils/response.util';

export const getPatients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await PatientService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getPatientById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await PatientService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Patient not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createPatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await PatientService.create(req.body);
    sendResponse(res, 201, item, 'Patient created successfully');
  } catch (error) {
    next(error);
  }
};

export const deletePatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await PatientService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Patient deleted successfully');
  } catch (error) {
    next(error);
  }
};