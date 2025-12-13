import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.todos.findMany();
};

export const findById = async (id: number) => {
  return await prisma.todos.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.todos.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.todos.delete({
    where: { id }
  });
};