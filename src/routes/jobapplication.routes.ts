import { Router } from 'express';
import * as JobApplicationController from '../controllers/jobapplication.controller';

const router = Router();

router.get('/', JobApplicationController.getJobApplications);
router.get('/:id', JobApplicationController.getJobApplicationById);
router.post('/', JobApplicationController.createJobApplication);
router.delete('/:id', JobApplicationController.deleteJobApplication);

export default router;