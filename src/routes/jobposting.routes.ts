import { Router } from 'express';
import * as JobPostingController from '../controllers/jobposting.controller';

const router = Router();

router.get('/', JobPostingController.getJobPostings);
router.get('/:id', JobPostingController.getJobPostingById);
router.post('/', JobPostingController.createJobPosting);
router.delete('/:id', JobPostingController.deleteJobPosting);

export default router;