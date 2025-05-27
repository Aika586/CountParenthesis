const { countWellFormedParenthesis } = require("../countParenthesis.js");

describe("CountWellFormedParenthesis", () => {
  test("Valid cases", () => {
    expect(countWellFormedParenthesis(1)).toBe(1);
    expect(countWellFormedParenthesis(3)).toBe(5);
    expect(countWellFormedParenthesis(5)).toBe(42);
    expect(countWellFormedParenthesis(10)).toBe(16796);
  });
  test("Invalid cases", () => {
    expect(() => countWellFormedParenthesis(0)).toThrow(RangeError);
    expect(() => countWellFormedParenthesis(16)).toThrow(RangeError);
  });
});
