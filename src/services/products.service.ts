import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.products.findMany();
};

export const findById = async (id: number) => {
  return await prisma.products.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.products.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.products.delete({
    where: { id }
  });
};