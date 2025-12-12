import { Router } from 'express';
import * as ProductsController from '../controllers/products.controller';

const router = Router();

router.get('/', ProductsController.getProductss);
router.get('/:id', ProductsController.getProductsById);
router.post('/', ProductsController.createProducts);
router.delete('/:id', ProductsController.deleteProducts);

export default router;