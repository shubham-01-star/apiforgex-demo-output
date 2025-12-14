import { Router } from 'express';
import * as TasksController from '../controllers/tasks.controller';

const router = Router();

router.get('/', TasksController.getTaskss);
router.get('/:id', TasksController.getTasksById);
router.post('/', TasksController.createTasks);
router.delete('/:id', TasksController.deleteTasks);

export default router;