var assert = require("assert");
const Calculator = require("../app/calculator");

describe("Validating Calculator Function", () => {
  it("should return  7 when the value is 5 + 2", () => {
    assert.equal(Calculator.add(5, 2), 7);
  });

  it("should return 8 when the value is 5 + 2", () => {
    assert.equal(Calculator.add(5, 2), 8);
  });

  it("should return 3 when the value is 5 - 2", () => {
    assert.equal(Calculator.sub(5, 2), 3);
  });

  it("should return 5 when the value is 5 - 2", () => {
    assert.equal(Calculator.sub(5, 2), 5);
  });

  it("should return 10 when the value is 5 * 2", () => {
    assert.equal(Calculator.mul(5, 2), 10);
  });

  it("should return 12 when the value is 5 * 2", () => {
    assert.equal(Calculator.mul(5, 2), 12);
  });

  it("should return 5 when the value is 10 / 2", () => {
    assert.equal(Calculator.div(10, 2), 5);
  });

  it("should return 2 when the value is 10 / 2", () => {
    assert.equal(Calculator.div(10, 2), 2);
  });
});
