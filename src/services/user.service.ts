import { EntityRepository, Repository } from 'typeorm';
import { UserService } from './User';

export class UserServiceImpl implements UserService {
  private repository: Repository<User>;

  constructor() {
    this.repository = new UserRepository(User);
  }

  async getAll(): Promise<User[]> {
    return this.repository.find();
  }

  async getById(id: number): Promise<User | undefined> {
    return this.repository.findOne(id);
  }

  async create(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async update(id: number, user: Partial<User>): Promise<User | undefined> {
    const existingUser = await this.getById(id);
    if (!existingUser) return;
    existingUser.name = user.name;
    return this.repository.save(existingUser);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}