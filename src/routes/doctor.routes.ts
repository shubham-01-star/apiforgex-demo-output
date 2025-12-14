import { Router } from 'express';
import * as DoctorController from '../controllers/doctor.controller';

const router = Router();

router.get('/', DoctorController.getDoctors);
router.get('/:id', DoctorController.getDoctorById);
router.post('/', DoctorController.createDoctor);
router.delete('/:id', DoctorController.deleteDoctor);

export default router;