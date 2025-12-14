import { Router } from 'express';
import * as MedicalRecordController from '../controllers/medicalrecord.controller';

const router = Router();

router.get('/', MedicalRecordController.getMedicalRecords);
router.get('/:id', MedicalRecordController.getMedicalRecordById);
router.post('/', MedicalRecordController.createMedicalRecord);
router.delete('/:id', MedicalRecordController.deleteMedicalRecord);

export default router;