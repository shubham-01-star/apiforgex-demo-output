import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';

@Injectable()
export class ArticleService {
  async publishArticle(user: any, article: Article) {
    // Validate the article fields
    if (!article.title || !article.content) {
      throw new Error('Title and content are required');
    }

    // Create a new article document in the database
    const db = await this.getDatabaseConnection();
    const articleDoc = await db.collection('articles').insertOne(article);
    return articleDoc.ops[0];
  }

  async getDatabaseConnection() {
    // Use your preferred PostgreSQL connection method
    const { Pool } = require('pg');
    const pool = new Pool({
      user: process.env.DATABASE_USER,
      host: process.env.DATABASE_HOST,
      database: 'fixed-test-pr',
      password: process.env.DATABASE_PASSWORD,
      port: 5432,
    });
    return pool;
  }
}

// You can use this entity file: article.entity.ts