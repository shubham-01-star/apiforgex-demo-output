import { EntityRepository, Repository } from 'typeorm';
import { Todo } from '../entities/Todo';

@EntityRepository(Todo)
export class TodoService extends Repository<Todo> {
  async create(todo: Partial<Todo>): Promise<Todo> {
    const newTodo = this.create(todo);
    return await this.save(newTodo);
  }

  async readAll(): Promise<Todo[]> {
    return await this.find();
  }

  async readById(id: number): Promise<Todo | undefined> {
    return await this.findOne(id);
  }

  async update(id: number, todo: Partial<Todo>): Promise<Todo> {
    const existingTodo = await this.readById(id);
    if (!existingTodo) throw new Error('Todo not found');
    Object.assign(existingTodo, todo);
    return await this.save(existingTodo);
  }

  async deleteById(id: number): Promise<void> {
    await this.delete(id);
  }
}