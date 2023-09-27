const customError = (errorMessage, statusCode, errorName) => {
  const error = new Error(errorMessage);
  error.code = statusCode;
  error.name = errorName;

  throw error;
};

module.exports = customError;
