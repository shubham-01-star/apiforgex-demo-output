import { Router } from 'express';
import * as StockMovementsController from '../controllers/stockmovements.controller';

const router = Router();

router.get('/', StockMovementsController.getStockMovementss);
router.get('/:id', StockMovementsController.getStockMovementsById);
router.post('/', StockMovementsController.createStockMovements);
router.delete('/:id', StockMovementsController.deleteStockMovements);

export default router;