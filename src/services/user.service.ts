import { Prisma } from '@prisma/client';

export const create = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data
  });
};

export const findAll = async () => {
  return await prisma.user.findMany();
};

export const findById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id }
  });
};
 
export const remove = async (id: number) => {
  return await prisma.user.delete({
    where: { id }
  });
};