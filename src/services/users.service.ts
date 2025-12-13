import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.users.findMany();
};

export const findById = async (id: number) => {
  return await prisma.users.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.users.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.users.delete({
    where: { id }
  });
};