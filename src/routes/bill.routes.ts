import { Router } from 'express';
import * as BillController from '../controllers/bill.controller';

const router = Router();

router.get('/', BillController.getBills);
router.get('/:id', BillController.getBillById);
router.post('/', BillController.createBill);
router.delete('/:id', BillController.deleteBill);

export default router;