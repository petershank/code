var assert = require("assert");
const validate = require("../validate");

describe("validate", function () {
  it("validates data types", function (done) {
    assert.strictEqual(validate.isString("a"), true);
    assert.strictEqual(validate.isNumber(0), true);
    assert.strictEqual(validate.isBoolean(false), true);
    assert.strictEqual(validate.isArray([1]), true);
    assert.strictEqual(validate.isObject({firstName: "Alice"}), true);
    done();
  });
});
