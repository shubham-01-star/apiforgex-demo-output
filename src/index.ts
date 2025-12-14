import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/error.middleware';

// Import Routes
import userRoutes from './routes/user.routes';
import patientRoutes from './routes/patient.routes';
import medicalrecordRoutes from './routes/medicalrecord.routes';
import appointmentRoutes from './routes/appointment.routes';
import doctorRoutes from './routes/doctor.routes';
import staffRoutes from './routes/staff.routes';
import billRoutes from './routes/bill.routes';
import medicationRoutes from './routes/medication.routes';
import inventoryRoutes from './routes/inventory.routes';
import appointmentscheduleRoutes from './routes/appointmentschedule.routes';
import labtestRoutes from './routes/labtest.routes';
import prescriptionRoutes from './routes/prescription.routes';
import insuranceRoutes from './routes/insurance.routes';
import emergencyRoutes from './routes/emergency.routes';
import bedallocationRoutes from './routes/bedallocation.routes';
import audittrailRoutes from './routes/audittrail.routes';
import userauditRoutes from './routes/useraudit.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/', (req, res) => {
res.json({ status: 'API is running 🚀', generator: 'ApiforgeX' });
});

// Register Routes
app.use('/api/users', userRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/medicalrecords', medicalrecordRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/staffs', staffRoutes);
app.use('/api/bills', billRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/inventorys', inventoryRoutes);
app.use('/api/appointmentschedules', appointmentscheduleRoutes);
app.use('/api/labtests', labtestRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/insurances', insuranceRoutes);
app.use('/api/emergencys', emergencyRoutes);
app.use('/api/bedallocations', bedallocationRoutes);
app.use('/api/audittrails', audittrailRoutes);
app.use('/api/useraudits', userauditRoutes);

// Error Middleware (Must be last)
app.use(errorHandler);

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});

export default app;