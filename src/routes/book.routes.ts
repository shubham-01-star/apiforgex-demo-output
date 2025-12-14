import { Router } from 'express';
import * as BookController from '../controllers/book.controller';

const router = Router();

router.get('/', BookController.getBooks);
router.get('/:id', BookController.getBookById);
router.post('/', BookController.createBook);
router.delete('/:id', BookController.deleteBook);

export default router;