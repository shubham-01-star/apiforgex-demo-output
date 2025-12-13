import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as sql from 'sql';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository('User')
        private readonly userRepository: any
      ) {}

  async findAll(): Promise<any> {
    const query = new sql.Builder();
    return await this.userRepository.find({ where: {}, take: 10 });
  }

  async findOne(id: number): Promise<any> {
    const query = new sql.Builder();
    return await this.userRepository.findOne(id);
  }

  async create(data: any): Promise<any> {
    const query = new sql.Builder();
    return await this.userRepository.save(data);
  }

  async update(id: number, data: any): Promise<any> {
    const query = new sql.Builder();
    return await this.userRepository.update(id, data);
  }

  async remove(id: number): Promise<void> {
    const query = new sql.Builder();
    return await this.userRepository.delete(id);
  }
}