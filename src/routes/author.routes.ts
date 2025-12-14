import { Router } from 'express';
import * as AuthorController from '../controllers/author.controller';

const router = Router();

router.get('/', AuthorController.getAuthors);
router.get('/:id', AuthorController.getAuthorById);
router.post('/', AuthorController.createAuthor);
router.delete('/:id', AuthorController.deleteAuthor);

export default router;