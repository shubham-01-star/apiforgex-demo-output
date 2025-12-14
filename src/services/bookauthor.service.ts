import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.bookauthor.findMany();
};

export const findById = async (id: number) => {
  return await prisma.bookauthor.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.bookauthor.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.bookauthor.delete({
    where: { id }
  });
};