import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.post.findMany();
};

export const findById = async (id: number) => {
  return await prisma.post.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.post.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.post.delete({
    where: { id }
  });
};