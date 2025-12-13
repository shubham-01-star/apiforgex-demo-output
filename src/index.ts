import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/error.middleware';

// Import Routes
import usersRoutes from './routes/users.routes';
import todosRoutes from './routes/todos.routes';

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
app.use('/api/userss', usersRoutes);
app.use('/api/todoss', todosRoutes);

// Error Middleware (Must be last)
app.use(errorHandler);

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});

export default app;