const { countWellFormedParenthesis } = require("../countParenthesis.js");

describe("Catalan Number Calculation", () => {
  it("C(0) = 1", () => {
    expect(Math.floor(countWellFormedParenthesis(0))).toBe(1);
  });

  it("C(3) = 5", () => {
    expect(Math.floor(countWellFormedParenthesis(3))).toBe(5);
  });

  it("C(5) = 42", () => {
    expect(Math.floor(countWellFormedParenthesis(5))).toBe(42);
  });

  it("C(10) = 16796", () => {
    expect(Math.floor(countWellFormedParenthesis(10))).toBe(16796);
  });
});
