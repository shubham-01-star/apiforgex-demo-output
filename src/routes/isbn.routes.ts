import { Router } from 'express';
import * as ISBNController from '../controllers/isbn.controller';

const router = Router();

router.get('/', ISBNController.getISBNs);
router.get('/:id', ISBNController.getISBNById);
router.post('/', ISBNController.createISBN);
router.delete('/:id', ISBNController.deleteISBN);

export default router;