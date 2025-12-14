import { Router } from 'express';
import * as BedAllocationController from '../controllers/bedallocation.controller';

const router = Router();

router.get('/', BedAllocationController.getBedAllocations);
router.get('/:id', BedAllocationController.getBedAllocationById);
router.post('/', BedAllocationController.createBedAllocation);
router.delete('/:id', BedAllocationController.deleteBedAllocation);

export default router;