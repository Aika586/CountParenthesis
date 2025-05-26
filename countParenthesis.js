
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const countWellFormedParenthesis = (n) => factorial(2 * n) / (factorial(n + 1) * factorial(n));
for (let i = 0; i <= 15; i++) {
  console.log(`C(${i}) = ${Math.floor(countWellFormedParenthesis(i))}`);
}

module.exports = { countWellFormedParenthesis };