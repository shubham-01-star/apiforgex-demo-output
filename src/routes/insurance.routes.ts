import { Router } from 'express';
import * as InsuranceController from '../controllers/insurance.controller';

const router = Router();

router.get('/', InsuranceController.getInsurances);
router.get('/:id', InsuranceController.getInsuranceById);
router.post('/', InsuranceController.createInsurance);
router.delete('/:id', InsuranceController.deleteInsurance);

export default router;