import { Router } from 'express';
import * as EmergencyController from '../controllers/emergency.controller';

const router = Router();

router.get('/', EmergencyController.getEmergencys);
router.get('/:id', EmergencyController.getEmergencyById);
router.post('/', EmergencyController.createEmergency);
router.delete('/:id', EmergencyController.deleteEmergency);

export default router;