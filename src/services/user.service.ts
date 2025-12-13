import { createConnection } from 'typeorm';
import { UserServiceInterface, UserRepository } from './interfaces/UserServiceInterface';
import { Injectable, InjectRepository } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UserService implements UserServiceInterface {
  private userRepository: UserRepository;

  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {
    this.userRepository = userRepository;
  }

  async registerUser(data: any) {
    const existingUser = await this.userRepository.findOne({
      where: { username: data.username },
    });

    if (existingUser) {
      throw new Error('Username already exists');
    }

    return await this.userRepository.save(data);
  }

  async login(user: any) {
    const userFromDB = await this.userRepository.findOne(user);

    if (!userFromDB) {
      return null;
    }

    return userFromDB;
  }
}