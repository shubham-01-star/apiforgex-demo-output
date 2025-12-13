import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    const existingUser = await this.findOne(id);
    if (!existingUser) {
      throw new Error('User not found');
    }
    Object.assign(existingUser, user);
    return this.userRepository.save(existingUser);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}