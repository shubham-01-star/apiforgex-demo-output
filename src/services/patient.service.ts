import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.patient.findMany();
};

export const findById = async (id: number) => {
  return await prisma.patient.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.patient.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.patient.delete({
    where: { id }
  });
};