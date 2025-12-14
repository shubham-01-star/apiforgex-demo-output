import { Router } from 'express';
import * as MedicationController from '../controllers/medication.controller';

const router = Router();

router.get('/', MedicationController.getMedications);
router.get('/:id', MedicationController.getMedicationById);
router.post('/', MedicationController.createMedication);
router.delete('/:id', MedicationController.deleteMedication);

export default router;