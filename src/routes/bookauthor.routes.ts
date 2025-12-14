import { Router } from 'express';
import * as BookAuthorController from '../controllers/bookauthor.controller';

const router = Router();

router.get('/', BookAuthorController.getBookAuthors);
router.get('/:id', BookAuthorController.getBookAuthorById);
router.post('/', BookAuthorController.createBookAuthor);
router.delete('/:id', BookAuthorController.deleteBookAuthor);

export default router;