import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.medicalrecord.findMany();
};

export const findById = async (id: number) => {
  return await prisma.medicalrecord.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.medicalrecord.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.medicalrecord.delete({
    where: { id }
  });
};