import { Router } from 'express';
import * as TodoController from '../controllers/todo.controller';

const router = Router();

router.get('/', TodoController.getTodos);
router.get('/:id', TodoController.getTodoById);
router.post('/', TodoController.createTodo);
router.delete('/:id', TodoController.deleteTodo);

export default router;