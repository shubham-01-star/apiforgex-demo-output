import { Model, Repository } from 'typeorm';
import { Todo } from '../models/todo.model';
import { User } from '../models/user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todoRepository: Repository<Todo>;

  constructor() {}

  async getTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async createTodo(todo: Todo): Promise<Todo> {
    const savedTodo = await this.todoRepository.save(todo);
    return savedTodo;
  }

  async updateTodo(id: number, todo: Todo): Promise<void> {
    await this.todoRepository.update(id, todo);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}