import { Router } from 'express';
import * as LabTestController from '../controllers/labtest.controller';

const router = Router();

router.get('/', LabTestController.getLabTests);
router.get('/:id', LabTestController.getLabTestById);
router.post('/', LabTestController.createLabTest);
router.delete('/:id', LabTestController.deleteLabTest);

export default router;