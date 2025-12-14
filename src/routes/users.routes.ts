import { Router } from 'express';
import * as UsersController from '../controllers/users.controller';

const router = Router();

router.get('/', UsersController.getUserss);
router.get('/:id', UsersController.getUsersById);
router.post('/', UsersController.createUsers);
router.delete('/:id', UsersController.deleteUsers);

export default router;