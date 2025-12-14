import { Router } from 'express';
import * as tasksController from '../controllers/tasks.controller';

const router = Router();

router.get('/', tasksController.gettaskss);
router.get('/:id', tasksController.gettasksById);
router.post('/', tasksController.createtasks);
router.delete('/:id', tasksController.deletetasks);

export default router;