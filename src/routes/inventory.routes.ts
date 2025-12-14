import { Router } from 'express';
import * as InventoryController from '../controllers/inventory.controller';

const router = Router();

router.get('/', InventoryController.getInventorys);
router.get('/:id', InventoryController.getInventoryById);
router.post('/', InventoryController.createInventory);
router.delete('/:id', InventoryController.deleteInventory);

export default router;