import app from './src/app.js';
import config from './src/config/index.js';

const PORT = config.port;

const server = app.listen(PORT, () => {
  console.log(`🚀 Mini ERP + CRM Server running in [${config.nodeEnv}] mode on port ${PORT}`);
  console.log(`🔗 Health Check URL: http://localhost:${PORT}/api/health`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection Error:', err);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception Error:', err);
  process.exit(1);
});
