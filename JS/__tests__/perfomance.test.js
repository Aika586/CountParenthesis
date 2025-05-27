const { countWellFormedParenthesis } = require("../countParenthesis.js");

const { performance } = require("perf_hooks");

describe("Performance tests", () => {
  test("Compute time n=5", () => {
    const start = performance.now();
    const result=countWellFormedParenthesis(n=5)
    const duration =performance.now()-start;

    console.log(`n=${n}, count= ${result} time = ${duration.toFixed(2)}ms`);
    expect(typeof result).toBe('number')
    expect(result).toBeGreaterThan(0)
  });
});
