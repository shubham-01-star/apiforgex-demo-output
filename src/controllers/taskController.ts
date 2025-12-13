import express from 'express';
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const router = express.Router();

const userService = new UserService();

router.get('/tasks', async (req: Request, res: Response) => {
  try {
    const tasks = await userService.getTasks();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to get tasks' });
  }
});

router.post('/tasks', async (req: Request, res: Response) => {
  try {
    const task = await userService.createTask(req.body);
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create task' });
  }
});

router.get('/tasks/:id', async (req: Request, res: Response) => {
  try {
    const task = await userService.getTaskById(req.params.id);
    return res.json(task);
  } catch (error) {
    return res.status(404).json({ message: 'Task not found' });
  }
});

router.put('/tasks/:id', async (req: Request, res: Response) => {
  try {
    const task = await userService.updateTask(req.params.id, req.body);
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update task' });
  }
});

router.delete('/tasks/:id', async (req: Request, res: Response) => {
  try {
    await userService.deleteTask(req.params.id);
    return res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete task' });
  }
});

export default router;