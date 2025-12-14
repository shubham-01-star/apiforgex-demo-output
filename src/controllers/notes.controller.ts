import { Request, Response, NextFunction } from 'express';
import * as NotesService from '../services/notes.service';
import { sendResponse } from '../utils/response.util';

export const getNotess = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await NotesService.findAll();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getNotesById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await NotesService.findById(Number(req.params.id));
    if (!item) return sendResponse(res, 404, null, 'Notes not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await NotesService.create(req.body);
    sendResponse(res, 201, item, 'Notes created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await NotesService.remove(Number(req.params.id));
    sendResponse(res, 200, null, 'Notes deleted successfully');
  } catch (error) {
    next(error);
  }
};