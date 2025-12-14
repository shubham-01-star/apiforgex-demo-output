import { Router } from 'express';
import * as urlsController from '../controllers/urls.controller';

const router = Router();

router.get('/', urlsController.geturlss);
router.get('/:id', urlsController.geturlsById);
router.post('/', urlsController.createurls);
router.delete('/:id', urlsController.deleteurls);

export default router;