"use strict";

const assert = require("assert");
const firstRepeatedChar = require("../index");
const myFunc = require("../index");

describe("firstRepeatedChar", function () {
  it("given a string, returns a string", function () {
    assert.strictEqual(typeof myFunc("foo"), "string");
  });
  it("returns the first repeated char in a string", function () {
    assert.strictEqual(firstRepeatedChar("aa"), "a");
    assert.strictEqual(firstRepeatedChar("xaa"), "a");
    assert.strictEqual(firstRepeatedChar("xaab"), "a");
    assert.strictEqual(firstRepeatedChar("abc"), null);
    
  });
});
