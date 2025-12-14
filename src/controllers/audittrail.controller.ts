import { Request, Response, NextFunction } from 'express';
import * as AuditTrailService from '../services/audittrail.service';
import { sendResponse } from '../utils/response.util';

export const getAuditTrails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await AuditTrailService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getAuditTrailById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await AuditTrailService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'AuditTrail not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createAuditTrail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await AuditTrailService.create(req.body);
    sendResponse(res, 201, item, 'AuditTrail created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteAuditTrail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await AuditTrailService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'AuditTrail deleted successfully');
  } catch (error) {
    next(error);
  }
};