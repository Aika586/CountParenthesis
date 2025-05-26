const { countWellFormedParenthesis } = require("../countParenthesis.js");

const { performance } = require("perf_hooks");

describe("Performance tests", () => {
  test("performance test n = 15", () => {
    const start = performance.now();
    const result = Math.floor(countWellFormedParenthesis(15));
    const end = performance.now();
    const duration = end - start;

    console.log(`n=15 => result = ${result}, time = ${duration.toFixed(4)}ms`);

    const expectedMaxTimeMs = 1000;
    expect(duration).toBeLessThan(expectedMaxTimeMs);
    expect(result).toBe(9694844);
  });
});
