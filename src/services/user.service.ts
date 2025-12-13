import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async register(user: { id: number; username: string; email: string }) {
    const hashedPassword = await bcrypt.hash(user.username, 10);
    return { ...user, password: hashedPassword };
  }

  async login(username: string, password: string) {
    const user = await this.findOneByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    return user;
  }

  async findOneByUsername(username: string) {
    // Implement database query to find a user by username
    // For demonstration purposes, assume the result is an object with 'id', 'username', and 'email' properties
    return { id: 1, username, email: 'test@example.com' };
  }

  async findOneByEmail(email: string) {
    // Implement database query to find a user by email
    // For demonstration purposes, assume the result is an object with 'id', 'username', and 'email' properties
    return { id: 1, username: 'testuser', email };
  }
}