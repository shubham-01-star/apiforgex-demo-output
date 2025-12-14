import { Router } from 'express';
import * as PatientController from '../controllers/patient.controller';

const router = Router();

router.get('/', PatientController.getPatients);
router.get('/:id', PatientController.getPatientById);
router.post('/', PatientController.createPatient);
router.delete('/:id', PatientController.deletePatient);

export default router;