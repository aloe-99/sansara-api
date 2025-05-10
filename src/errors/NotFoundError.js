module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.errorCode = 404;
    this.statusCode = 404;
    this.errorMessage = message;
    this.name = 'NotFoundError';
  }
};
