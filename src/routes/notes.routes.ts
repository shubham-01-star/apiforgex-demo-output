import { Router } from 'express';
import * as NotesController from '../controllers/notes.controller';

const router = Router();

router.get('/', NotesController.getNotess);
router.get('/:id', NotesController.getNotesById);
router.post('/', NotesController.createNotes);
router.delete('/:id', NotesController.deleteNotes);

export default router;