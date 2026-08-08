import { errorResponse } from '../utils/apiResponse.js';

export const notFoundHandler = (req, res, next) => {
  return errorResponse(res, `Cannot ${req.method} ${req.originalUrl} - Route Not Found`, null, 404);
};
