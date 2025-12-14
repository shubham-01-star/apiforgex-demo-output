import { Request, Response, NextFunction } from 'express';
import * as UserAuditService from '../services/useraudit.service';
import { sendResponse } from '../utils/response.util';

export const getUserAudits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await UserAuditService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getUserAuditById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await UserAuditService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'UserAudit not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createUserAudit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await UserAuditService.create(req.body);
    sendResponse(res, 201, item, 'UserAudit created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteUserAudit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserAuditService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'UserAudit deleted successfully');
  } catch (error) {
    next(error);
  }
};