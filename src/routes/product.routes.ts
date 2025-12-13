import { Router } from 'express';
import * as ProductController from '../controllers/product.controller';

const router = Router();

router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProductById);
router.post('/', ProductController.createProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;