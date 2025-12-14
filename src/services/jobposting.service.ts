import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.jobposting.findMany();
};

export const findById = async (id: number) => {
  return await prisma.jobposting.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.jobposting.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.jobposting.delete({
    where: { id }
  });
};