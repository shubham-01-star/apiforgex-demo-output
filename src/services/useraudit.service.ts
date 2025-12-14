import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.useraudit.findMany();
};

export const findById = async (id: number) => {
  return await prisma.useraudit.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.useraudit.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.useraudit.delete({
    where: { id }
  });
};