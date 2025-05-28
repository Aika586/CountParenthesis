const { countWellFormedParenthesis } = require("../countParenthesis.js");
const { performance } = require("perf_hooks");

describe("Performance tests", () => {
  test("Algorithm should complete within acceptable time for n=5", () => {
    const n = 5;
    const start = performance.now();
    const result = countWellFormedParenthesis(n);
    const duration = performance.now() - start;

    console.log(`n=${n}, count=${result}, time=${duration.toFixed(2)}ms`);
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThan(0);

    // Проверяем, что выполнение укладывается в лимит времени (например, 50мс)
    expect(duration).toBeLessThan(50);
  });
});
