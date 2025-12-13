import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

interface Todo {
  todoId: number;
  title: string;
  description: string;
}

class TodoService {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async getAllTodos(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      const { rows } = await this.pool.query('SELECT * FROM todos');
      return res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to get all todos' });
    }
  }

  async createTodo(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      const { title, description } = req.body;
      if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
      }
      const result = await this.pool.query(
        `INSERT INTO todos (title, description)
         VALUES ($1, $2)
         RETURNING *`,
        [title, description]
      );
      return res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to create todo' });
    }
  }

  async updateTodo(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      const { todoId, title, description } = req.body;
      if (!todoId || !title || !description) {
        return res.status(400).json({ message: 'Todo ID, title and description are required' });
      }
      await this.pool.query('UPDATE todos SET title = $1, description = $2 WHERE todoId = $3', [
        title,
        description,
        todoId,
      ]);
      return res.status(200).json({ message: 'Todo updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to update todo' });
    }
  }

  async deleteTodo(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      const { todoId } = req.body;
      if (!todoId) {
        return res.status(400).json({ message: 'Todo ID is required' });
      }
      await this.pool.query('DELETE FROM todos WHERE todoId = $1', [todoId]);
      return res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to delete todo' });
    }
  }
}

export default new TodoService(new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
}))