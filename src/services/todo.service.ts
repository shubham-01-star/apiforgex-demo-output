import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async getTodoById(id: number): Promise<Todo | null> {
    return await this.todoRepository.findOne(id);
  }

  async createTodo(todo: Todo): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async updateTodo(todo: Todo): Promise<void> {
    await this.todoRepository.update(todo.id, todo);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}