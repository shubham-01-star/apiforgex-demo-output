import { Entity, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  constructor(private readonly userRepository: Repository<any>) {}

  async getAllUsers(): Promise<any> {
    return this.userRepository.find();
  }

  async getUserById(id: number): Promise<any> {
    return this.userRepository.findOne(id);
  }

  async create_user(user: any): Promise<any> {
    return await this.userRepository.save(user);
  }

  async update_user(id: number, user: any): Promise<any> {
    const existingUser = await this.getUserById(id);
    if (existingUser) {
      return await this.userRepository.update(existingUser.id, user);
    } else {
      throw new Error('User not found');
    }
  }

  async delete_user(id: number): Promise<void> {
    return await this.userRepository.delete(id);
  }

}