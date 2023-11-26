const loggerOne = (request, response, next) => {
  console.log("Log 1", request.method, request.originalUrl, request.body);
  next();
};

module.exports = loggerOne;
