import { prisma } from '../config/db.config';

// Service Layer: Handles Business Logic and Database Interactions

export const findAll = async () => {
  return await prisma.appointmentschedule.findMany();
};

export const findById = async (id: number) => {
  return await prisma.appointmentschedule.findUnique({
    where: { id }
  });
};

export const create = async (data: any) => {
  return await prisma.appointmentschedule.create({
    data
  });
};

export const remove = async (id: number) => {
  return await prisma.appointmentschedule.delete({
    where: { id }
  });
};