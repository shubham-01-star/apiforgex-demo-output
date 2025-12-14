import { Request, Response, NextFunction } from 'express';
import * as JobApplicationService from '../services/jobapplication.service';
import { sendResponse } from '../utils/response.util';

export const getJobApplications = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await JobApplicationService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getJobApplicationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await JobApplicationService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'JobApplication not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createJobApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await JobApplicationService.create(req.body);
    sendResponse(res, 201, item, 'JobApplication created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteJobApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await JobApplicationService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'JobApplication deleted successfully');
  } catch (error) {
    next(error);
  }
};