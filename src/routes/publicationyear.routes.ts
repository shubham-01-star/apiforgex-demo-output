import { Router } from 'express';
import * as PublicationYearController from '../controllers/publicationyear.controller';

const router = Router();

router.get('/', PublicationYearController.getPublicationYears);
router.get('/:id', PublicationYearController.getPublicationYearById);
router.post('/', PublicationYearController.createPublicationYear);
router.delete('/:id', PublicationYearController.deletePublicationYear);

export default router;