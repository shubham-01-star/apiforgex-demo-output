export const sendResponse = (res: Response, statusCode: number, data: any, message = 'Success') => {
  if (statusCode >= 200 && statusCode < 300) {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  } else {
    throw new Error(`Invalid status code: ${statusCode}`);
  }
};