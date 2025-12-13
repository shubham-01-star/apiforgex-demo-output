import { EntityRepository, Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  async findAll(): Promise<Todo[]> {
    return this.find();
  }

  async find(id: number): Promise<Todo | undefined> {
    return this.findOne(id);
  }

  async create(todo: Todo): Promise<Todo> {
    return this.save(todo);
  }

  async update(id: number, todo: Todo): Promise<Todo | null> {
    const existingTodo = await this.findOne(id);
    if (!existingTodo) return null;

    Object.assign(existingTodo, todo);

    return this.save(existingTodo);
  }

  async delete(id: number): Promise<void> {
    await this.delete(id);
  }
}