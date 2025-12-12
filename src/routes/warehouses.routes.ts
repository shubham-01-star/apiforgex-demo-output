import { Router } from 'express';
import * as WarehousesController from '../controllers/warehouses.controller';

const router = Router();

router.get('/', WarehousesController.getWarehousess);
router.get('/:id', WarehousesController.getWarehousesById);
router.post('/', WarehousesController.createWarehouses);
router.delete('/:id', WarehousesController.deleteWarehouses);

export default router;