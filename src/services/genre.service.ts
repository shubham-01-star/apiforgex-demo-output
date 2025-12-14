import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.genre.findMany();
};

export const findById = async (id: number) => {
  return await prisma.genre.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.genre.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.genre.delete({
    where: { id }
  });
};