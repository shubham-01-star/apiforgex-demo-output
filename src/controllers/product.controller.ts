import { Request, Response, NextFunction } from 'express';
import * as ProductService from '../services/product.service';
import { sendResponse } from '../utils/response.util';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await ProductService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await ProductService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Product not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await ProductService.create(req.body);
    sendResponse(res, 201, item, 'Product created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await ProductService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Product deleted successfully');
  } catch (error) {
    next(error);
  }
};