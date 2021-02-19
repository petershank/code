"use strict";

const assert = require("assert");
const myFunc = require("../index");

describe("the unit under test", function () {
  it("regurgitates data", function () {
    assert.strictEqual(myFunc("foo"), "foo");
  });
});
