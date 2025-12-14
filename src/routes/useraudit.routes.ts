import { Router } from 'express';
import * as UserAuditController from '../controllers/useraudit.controller';

const router = Router();

router.get('/', UserAuditController.getUserAudits);
router.get('/:id', UserAuditController.getUserAuditById);
router.post('/', UserAuditController.createUserAudit);
router.delete('/:id', UserAuditController.deleteUserAudit);

export default router;