import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.appointment.findMany();
};

export const findById = async (id: number) => {
  return await prisma.appointment.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.appointment.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.appointment.delete({
    where: { id }
  });
};