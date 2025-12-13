import { Router } from 'express';
import * as todoController from '../controllers/todo.controller';

const router = Router();

router.get('/', todoController.gettodos);
router.get('/:id', todoController.gettodoById);
router.post('/', todoController.createtodo);
router.delete('/:id', todoController.deletetodo);

export default router;