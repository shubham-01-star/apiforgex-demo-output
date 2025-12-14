import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.insurance.findMany();
};

export const findById = async (id: number) => {
  return await prisma.insurance.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.insurance.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.insurance.delete({
    where: { id }
  });
};