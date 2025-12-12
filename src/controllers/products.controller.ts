import { Request, Response, NextFunction } from 'express';
import * as ProductsService from '../services/products.service';
import { sendResponse } from '../utils/response.util';

export const getProductss = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await ProductsService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getProductsById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await ProductsService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Products not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await ProductsService.create(req.body);
    sendResponse(res, 201, item, 'Products created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await ProductsService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Products deleted successfully');
  } catch (error) {
    next(error);
  }
};