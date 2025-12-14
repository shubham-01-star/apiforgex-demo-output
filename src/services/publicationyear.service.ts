import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.publicationyear.findMany();
};

export const findById = async (id: number) => {
  return await prisma.publicationyear.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.publicationyear.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.publicationyear.delete({
    where: { id }
  });
};