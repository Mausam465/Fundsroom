import { successResponse } from '../utils/apiResponse.js';

/**
 * Health check controller
 * GET /api/health
 */
export const checkHealth = (req, res) => {
  const healthData = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  };

  return successResponse(res, 'Mini ERP + CRM API is healthy and operational', healthData);
};
