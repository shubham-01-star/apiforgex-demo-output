import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.get('/', userController.getusers);
router.get('/:id', userController.getuserById);
router.post('/', userController.createuser);
router.delete('/:id', userController.deleteuser);

export default router;