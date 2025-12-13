import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findAll(): Promise<User[]> {
    return await this.find();
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await this.findOne({ where: { username } });
    return user;
  }
}