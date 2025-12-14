import { Router } from 'express';
import * as AppointmentScheduleController from '../controllers/appointmentschedule.controller';

const router = Router();

router.get('/', AppointmentScheduleController.getAppointmentSchedules);
router.get('/:id', AppointmentScheduleController.getAppointmentScheduleById);
router.post('/', AppointmentScheduleController.createAppointmentSchedule);
router.delete('/:id', AppointmentScheduleController.deleteAppointmentSchedule);

export default router;