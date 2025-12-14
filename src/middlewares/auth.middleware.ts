import { Request, Response, Next } from 'express';
import { prisma } from '../config/db.config';

export const authenticate = async (req: Request, res: Response, next: Next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Missing token' });

    const user = await prisma.user.findFirst({
      where: { token },
    });

    if (!user) return res.status(401).json({ error: 'Invalid or expired token' });

    req.user = user;
  } catch (error) {
    return res.status(500).json({ error: 'Failed to authenticate user' });
  }

  next();
};