import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TodoService {

  private readonly httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  async createTodo(data: any): Promise<any> {
    const response = await this.httpService.post('todos', data);
    return response.data;
  }

  async getTodos(): Promise<any> {
    const response = await this.httpService.get('todos');
    return response.data;
  }

  async getTodo(id: number): Promise<any> {
    const response = await this.httpService.get(`todos/${id}`);
    return response.data;
  }

  async updateTodo(id: number, data: any): Promise<any> {
    const response = await this.httpService.put(`todos/${id}`, data);
    return response.data;
  }

  async deleteTodo(id: number): Promise<any> {
    const response = await this.httpService.delete(`todos/${id}`);
    return response.data;
  }
}