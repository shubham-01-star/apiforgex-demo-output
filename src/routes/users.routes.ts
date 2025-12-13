import { Router } from 'express';
import * as usersController from '../controllers/users.controller';

const router = Router();

router.get('/', usersController.getuserss);
router.get('/:id', usersController.getusersById);
router.post('/', usersController.createusers);
router.delete('/:id', usersController.deleteusers);

export default router;