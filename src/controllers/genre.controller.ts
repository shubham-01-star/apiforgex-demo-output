import { Request, Response, NextFunction } from 'express';
import * as GenreService from '../services/genre.service';
import { sendResponse } from '../utils/response.util';

export const getGenres = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await GenreService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getGenreById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await GenreService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Genre not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createGenre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await GenreService.create(req.body);
    sendResponse(res, 201, item, 'Genre created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteGenre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await GenreService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Genre deleted successfully');
  } catch (error) {
    next(error);
  }
};