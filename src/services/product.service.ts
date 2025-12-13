import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.product.findMany();
};

export const findById = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.product.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.product.delete({
    where: { id }
  });
};