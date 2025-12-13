import { Injectable } from '@nestjs/common';
import { TodoModel } from '../models/Todo.model';

@Injectable()
export class TodoService {
  async findAll(): Promise<TodoModel[]> {
    // TO DO: Implement a database query to fetch all todos
    return [];
  }

  async findOne(id: number): Promise<TodoModel | null> {
    // TO DO: Implement a database query to find a todo by id
    return null;
  }

  async create(todo: TodoModel): Promise<TodoModel> {
    // TO DO: Implement database logic to save the new todo item
    return todo;
  }

  async update(id: number, todo: Partial<TodoModel>): Promise<TodoModel | null> {
    // TO DO: Implement database logic to update a todo item
    return null;
  }

  async remove(id: number): Promise<void> {
    // TO DO: Implement database logic to delete a todo item
  }
}