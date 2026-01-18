const responseCreator = (message, data) => {
  return {
    success: true,
    message,
    data,
  };
};

const errorCreator = (message, status = 500) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

module.exports = {
  responseCreator,
  errorCreator,
};
