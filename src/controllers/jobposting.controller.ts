import { Request, Response, NextFunction } from 'express';
import * as JobPostingService from '../services/jobposting.service';
import { sendResponse } from '../utils/response.util';

export const getJobPostings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await JobPostingService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getJobPostingById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await JobPostingService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'JobPosting not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createJobPosting = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await JobPostingService.create(req.body);
    sendResponse(res, 201, item, 'JobPosting created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteJobPosting = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await JobPostingService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'JobPosting deleted successfully');
  } catch (error) {
    next(error);
  }
};