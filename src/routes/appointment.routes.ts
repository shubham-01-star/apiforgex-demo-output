import { Router } from 'express';
import * as AppointmentController from '../controllers/appointment.controller';

const router = Router();

router.get('/', AppointmentController.getAppointments);
router.get('/:id', AppointmentController.getAppointmentById);
router.post('/', AppointmentController.createAppointment);
router.delete('/:id', AppointmentController.deleteAppointment);

export default router;