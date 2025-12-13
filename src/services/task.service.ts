import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async createTask(title: string, description: string): Promise<Task> {
    const newTask = this.taskRepository.create({ title, description });
    return await this.taskRepository.save(newTask);
  }

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getTask(id: number): Promise<Task | null> {
    return await this.taskRepository.findOne(id);
  }

  async updateTask(id: number, title?: string, description?: string): Promise<Task> {
    const task = await this.getTask(id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    if (title) {
      task.title = title;
    }
    if (description) {
      task.description = description;
    }
    return await this.taskRepository.save(task);
  }

  async deleteTask(id: number): Promise<void> {
    const task = await this.getTask(id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    await this.taskRepository.remove(task);
  }
}

export default TaskService;