import { Request, Response, NextFunction } from 'express';
import * as ArticleService from '../services/article.service';
import { sendResponse } from '../utils/response.util';

export const getArticles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await ArticleService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getArticleById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await ArticleService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Article not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createArticle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await ArticleService.create(req.body);
    sendResponse(res, 201, item, 'Article created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteArticle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await ArticleService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Article deleted successfully');
  } catch (error) {
    next(error);
  }
};