import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/error.middleware';

// Import Routes
import bookRoutes from './routes/book.routes';
import bookauthorRoutes from './routes/bookauthor.routes';
import genreRoutes from './routes/genre.routes';
import isbnRoutes from './routes/isbn.routes';
import publicationyearRoutes from './routes/publicationyear.routes';

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
app.use('/api/books', bookRoutes);
app.use('/api/bookauthors', bookauthorRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/isbns', isbnRoutes);
app.use('/api/publicationyears', publicationyearRoutes);

// Error Middleware (Must be last)
app.use(errorHandler);

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});

export default app;