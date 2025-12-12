import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/error.middleware';

// Import Routes
import productsRoutes from './routes/products.routes';
import warehousesRoutes from './routes/warehouses.routes';
import stockmovementsRoutes from './routes/stockmovements.routes';

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
app.use('/api/productss', productsRoutes);
app.use('/api/warehousess', warehousesRoutes);
app.use('/api/stockmovementss', stockmovementsRoutes);

// Error Middleware (Must be last)
app.use(errorHandler);

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});

export default app;