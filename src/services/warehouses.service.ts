import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.warehouses.findMany();
};

export const findById = async (id: number) => {
  return await prisma.warehouses.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.warehouses.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.warehouses.delete({
    where: { id }
  });
};