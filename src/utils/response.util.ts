export const sendResponse = (res: Response, statusCode: number, data: any, message = 'Success') => {
  if (statusCode < 200 || statusCode >= 400) {
    res.status(statusCode).json({
      success: false,
      message,
      data,
    });
  } else {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }
};