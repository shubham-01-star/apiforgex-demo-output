import { Request, Response, NextFunction } from 'express';
import * as BedAllocationService from '../services/bedallocation.service';
import { sendResponse } from '../utils/response.util';

export const getBedAllocations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await BedAllocationService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getBedAllocationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BedAllocationService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'BedAllocation not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createBedAllocation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await BedAllocationService.create(req.body);
    sendResponse(res, 201, item, 'BedAllocation created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteBedAllocation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await BedAllocationService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'BedAllocation deleted successfully');
  } catch (error) {
    next(error);
  }
};