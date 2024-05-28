const constants = require("./../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.status ? res.status : 500;

  switch (statusCode) {
    case constants.VALIDATION:
      res.json({
        title: "Validtion Failed",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "Authorization Failed",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.SERVER_ERROR:
      res.json({
        title: "Server Not found",
        message: err.message,
        stackTrace: err.stack,
      });

    default:
      console.log("No Error!");
      break;
  }
};

module.exports = errorHandler;
