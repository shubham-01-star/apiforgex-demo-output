export const sendResponse = (res: Response, statusCode: number, data: any, message = 'Success') => {
  res.status(statusCode).json({
    success: statusCode >= 200 && statusCode < 300,
    message,
    data,
  });
};