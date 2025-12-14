import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.isbn.findMany();
};

export const findById = async (id: number) => {
  return await prisma.isbn.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.isbn.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.isbn.delete({
    where: { id }
  });
};