import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { forwardRef } from '@nestjs/common';
import { User } from './user.model';
import { Task } from './task.model';

@Entity()
export class TodoList {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Task, task => task.todoList)
  tasks: Task[];
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { forwardRef } from '@nestjs/common';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: String })
  title: string;
  @Column({ type: String })
  description: string;
  @Column({ type: Boolean, default: false })
  completed: boolean;

  @ManyToOne(() => TodoList, todoList => todoList.tasks)
  todoList: forwardRef(() => TodoList);
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoList } from './todo-list.entity';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoList)
    private readonly todoListsRepository: Repository<TodoList>,
    @InjectRepository(Todo)
      private readonly todosRepository: Repository<Todo>,
  ) {}

  async createTodoList(todoListData: any) {
    const newTodoList = await this.todoListsRepository.save(todoListData);
    return newTodoList;
  }

  async createTodo(todoData: any, todoListId: string) {
    const newTodo = await this.todosRepository.save({ ...todoData, todoListId });
    return newTodo;
  }

  async getAllTodoLists() {
    return this.todoListsRepository.find();
  }

  async getTodoListById(id: string) {
    return this.todoListsRepository.findOne(id);
  }

  async updateTodoList(todoListId: string, todoListData: any) {
    const updatedTodoList = await this.todoListsRepository.update(todoListId, todoListData);
    return updatedTodoList;
  }

  async deleteTodoList(id: string) {
    return this.todoListsRepository.delete(id);
  }
}