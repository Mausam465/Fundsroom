import { errorResponse } from '../utils/apiResponse.js';
import config from '../config/index.js';

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const errorDetails = config.nodeEnv === 'development' ? err.stack : undefined;

  return errorResponse(res, message, errorDetails, statusCode);
};
