import { Request, Response, NextFunction } from 'express';
import * as AppointmentService from '../services/appointment.service';
import { sendResponse } from '../utils/response.util';

export const getAppointments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await AppointmentService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getAppointmentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await AppointmentService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Appointment not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await AppointmentService.create(req.body);
    sendResponse(res, 201, item, 'Appointment created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await AppointmentService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Appointment deleted successfully');
  } catch (error) {
    next(error);
  }
};