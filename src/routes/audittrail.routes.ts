import { Router } from 'express';
import * as AuditTrailController from '../controllers/audittrail.controller';

const router = Router();

router.get('/', AuditTrailController.getAuditTrails);
router.get('/:id', AuditTrailController.getAuditTrailById);
router.post('/', AuditTrailController.createAuditTrail);
router.delete('/:id', AuditTrailController.deleteAuditTrail);

export default router;