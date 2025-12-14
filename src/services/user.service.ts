import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.user.findMany();
};

export const findById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.user.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.user.delete({
    where: { id }
  });
};