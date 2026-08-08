import express from 'express';
import cors from 'cors';
import config from './config/index.js';
import apiRoutes from './routes/index.js';
import { notFoundHandler } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Global Middlewares
app.use(cors({
  origin: config.clientUrl,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Mini ERP + CRM API Portal',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
    },
  });
});

// Mount API routes
app.use('/api', apiRoutes);

// Catch 404 routes
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

export default app;
