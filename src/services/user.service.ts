import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as pg from 'pg';
import { Repository, TypeORMModuleOptions } from 'typeorm';

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(username: string, password: string) {
    const query = `
      INSERT INTO users (username, password)
      VALUES ($1, $2)
    `;
    const params = [username, password];
    await this.userRepository.insert(params);
  }

  async getUserById(id: number) {
    return this.userRepository.findOne(id);
  }
}