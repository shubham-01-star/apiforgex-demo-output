import { Router } from 'express';
import * as StaffController from '../controllers/staff.controller';

const router = Router();

router.get('/', StaffController.getStaffs);
router.get('/:id', StaffController.getStaffById);
router.post('/', StaffController.createStaff);
router.delete('/:id', StaffController.deleteStaff);

export default router;