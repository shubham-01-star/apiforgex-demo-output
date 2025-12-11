import { Router } from 'express';
import * as PostController from '../controllers/post.controller';

const router = Router();

router.get('/', PostController.getPosts);
router.get('/:id', PostController.getPostById);
router.post('/', PostController.createPost);
router.delete('/:id', PostController.deletePost);

export default router;