const loggerTwo = (request, response, next) => {
  console.log("Log 2", request.method, request.originalUrl, request.body);
  next();
};

module.exports = loggerTwo;
