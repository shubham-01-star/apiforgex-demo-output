import { prisma } from '../config/db.config';

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await prisma.Task.findMany();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const task = await prisma.Task.create({ data: req.body });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  try {
    const task = await prisma.Task.findUnique({ where: { id: req.params.id } });
    if (!task) return next({ status: 404, message: 'Task not found' });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTaskById = async (req, res, next) => {
  try {
    const task = await prisma.Task.update({ where: { id: req.params.id }, data: req.body });
    if (!task) return next({ status: 404, message: 'Task not found' });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTaskById = async (req, res, next) => {
  try {
    await prisma.Task.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};