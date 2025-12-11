import { Request, Response, NextFunction } from 'express';
import * as PostService from '../services/post.service';
import { sendResponse } from '../utils/response.util';

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await PostService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getPostById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await PostService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Post not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await PostService.create(req.body);
    sendResponse(res, 201, item, 'Post created successfully');
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await PostService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Post deleted successfully');
  } catch (error) {
    next(error);
  }
};