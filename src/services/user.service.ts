export async function create(user: any, req, res, next) {
  const existingUser = await prisma.user.findUnique({ where: { username: user.username } });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  try {
    await prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        // ... add other fields as needed
      },
    });
    return res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to create user' });
  }
}

export async function read(id: any, req, res, next) {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.json(user);
}

export async function update(id: any, user: any, req, res, next) {
  const existingUser = await prisma.user.findUnique({ where: { id } });
  if (!existingUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  try {
    await prisma.user.update({
      where: { id },
      data: {
        username: user.username,
        email: user.email,
        // ... update other fields as needed
      },
    });
    return res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to update user' });
  }
}

export async function deleteUser(id: any, req, res, next) {
  const existingUser = await prisma.user.findUnique({ where: { id } });
  if (!existingUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  try {
    await prisma.user.delete({ where: { id } });
    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to delete user' });
  }
}