import { Request, Response, NextFunction } from 'express';
import * as StaffService from '../services/staff.service';
import { sendResponse } from '../utils/response.util';

export const getStaffs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await StaffService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getStaffById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await StaffService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Staff not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await StaffService.create(req.body);
    sendResponse(res, 201, item, 'Staff created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await StaffService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Staff deleted successfully');
  } catch (error) {
    next(error);
  }
};