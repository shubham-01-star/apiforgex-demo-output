import { Router } from 'express';
import * as GenreController from '../controllers/genre.controller';

const router = Router();

router.get('/', GenreController.getGenres);
router.get('/:id', GenreController.getGenreById);
router.post('/', GenreController.createGenre);
router.delete('/:id', GenreController.deleteGenre);

export default router;