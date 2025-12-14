import { Request, Response, NextFunction } from 'express';
import * as AppointmentScheduleService from '../services/appointmentschedule.service';
import { sendResponse } from '../utils/response.util';

export const getAppointmentSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await AppointmentScheduleService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getAppointmentScheduleById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await AppointmentScheduleService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'AppointmentSchedule not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createAppointmentSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await AppointmentScheduleService.create(req.body);
    sendResponse(res, 201, item, 'AppointmentSchedule created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteAppointmentSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await AppointmentScheduleService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'AppointmentSchedule deleted successfully');
  } catch (error) {
    next(error);
  }
};