import { Router } from 'express';
import * as todosController from '../controllers/todos.controller';

const router = Router();

router.get('/', todosController.gettodoss);
router.get('/:id', todosController.gettodosById);
router.post('/', todosController.createtodos);
router.delete('/:id', todosController.deletetodos);

export default router;