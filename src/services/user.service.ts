import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getUserById(id: number): Promise<UserEntity | null> {
    return this.userRepository.findOne(id);
  }

  async createNewUser(userData: { username: string; password: string }): Promise<UserEntity> {
    const user = new UserEntity();
    Object.assign(user, userData);
    user.password = crypto.createHash('sha256').update(userData.password).digest('hex');
    return this.userRepository.save(user);
  }

  async updateExistingUser(id: number, userData: { username?: string; password?: string }): Promise<UserEntity> {
    const existingUser = await this.getUserById(id);

    if (!existingUser) {
      throw new Error('User not found');
    }

    Object.assign(existingUser, userData);
    if (userData.password) {
      existingUser.password = crypto.createHash('sha256').update(userData.password).digest('hex');
    }
    return this.userRepository.save(existingUser);
  }

  async deleteExistingUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}