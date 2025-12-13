import { Router } from 'express';
import * as BorrowingController from '../controllers/borrowing.controller';

const router = Router();

router.get('/', BorrowingController.getBorrowings);
router.get('/:id', BorrowingController.getBorrowingById);
router.post('/', BorrowingController.createBorrowing);
router.delete('/:id', BorrowingController.deleteBorrowing);

export default router;