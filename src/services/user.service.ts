import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository('User')
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    return this.userRepository.create(data).save();
  }

  async getUserById(id: number) {
    return this.userRepository.findOne(id);
  }

  async getUsers() {
    return this.userRepository.find();
  }

  async updateUserService(data: any, id: number) {
    data.password = undefined;
    return this.userRepository.update(id, data).then(() => this.getUserById(id));
  }

  async deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}