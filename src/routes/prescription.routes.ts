import { Router } from 'express';
import * as PrescriptionController from '../controllers/prescription.controller';

const router = Router();

router.get('/', PrescriptionController.getPrescriptions);
router.get('/:id', PrescriptionController.getPrescriptionById);
router.post('/', PrescriptionController.createPrescription);
router.delete('/:id', PrescriptionController.deletePrescription);

export default router;