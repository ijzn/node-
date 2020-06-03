class BaseModle {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModle {
  constructor(data, message) {
    super(data, message);
    this.error = 0;
  }
}

class ErrorModel extends BaseModle {
  constructor(data, message) {
    super(data, message);
    this.error = -1;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
};
