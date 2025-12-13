import { Router } from 'express';
import * as ArticleController from '../controllers/article.controller';

const router = Router();

router.get('/', ArticleController.getArticles);
router.get('/:id', ArticleController.getArticleById);
router.post('/', ArticleController.createArticle);
router.delete('/:id', ArticleController.deleteArticle);

export default router;