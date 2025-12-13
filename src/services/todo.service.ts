import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository('todos')
    private readonly todosRepository: Repository<any>,
  ) {}

  async createTodo(todoData) {
    const hashedPassword = crypto.createHash('sha256').update(todoData.password).digest('hex');
    todoData.password = hashedPassword;
    return this.todosRepository.save(todoData);
  }

  async getAllTodos() {
    return this.todosRepository.find();
  }

  async getTodoById(id) {
    return this.todosRepository.findOne({ where: { id } });
  }

  async updateTodoById(id, todoData) {
    const todo = await this.getTodoById(id);
    if (todo) {
      Object.assign(todo, todoData);
      return this.todosRepository.save(todo);
    }
    return null;
  }

  async deleteTodoById(id) {
    return this.todosRepository.delete({ id });
  }

}