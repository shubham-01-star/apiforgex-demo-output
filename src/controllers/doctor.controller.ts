import { Request, Response, NextFunction } from 'express';
import * as DoctorService from '../services/doctor.service';
import { sendResponse } from '../utils/response.util';

export const getDoctors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await DoctorService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getDoctorById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await DoctorService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Doctor not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createDoctor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await DoctorService.create(req.body);
    sendResponse(res, 201, item, 'Doctor created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteDoctor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await DoctorService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Doctor deleted successfully');
  } catch (error) {
    next(error);
  }
};