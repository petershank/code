"use strict";

const trueTypeOf = require("./trueTypeOf");

const validate = {
  isString: function (obj) {
    if (trueTypeOf(obj) === "string") {
      return true;
    } else {
      throw new TypeError("Expected a string");
    }
  },
  isNumber: function (obj) {
    return trueTypeOf(obj) === "number";
  },
  isBoolean: function (obj) {
    return trueTypeOf(obj) === "boolean";
  },
  isArray: function (obj) {
    return trueTypeOf(obj) === "array";
  },
  isObject: function (obj) {
    return trueTypeOf(obj) === "object";
  },
};

module.exports = validate;
