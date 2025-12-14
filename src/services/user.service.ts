import { prisma } from '../config/db.config';

export const get = async (req, res) => {
  try {
    const users = await prisma.User.findMany();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to retrieve users' });
  }
};

export const create = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await prisma.User.create({
      data: {
        username,
        email,
      },
    });
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to create user' });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;

    await prisma.User.update({
      where: { id },
      data: {
        username,
        email,
      },
    });

    return res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to update user' });
  }
};

export const delete = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.User.delete({
      where: { id },
    });

    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to delete user' });
  }
};