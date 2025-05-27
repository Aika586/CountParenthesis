
function countWellFormedParenthesis(n) {
  if (n < 1 || n > 15) {
    throw new RangeError("n must be between 1 and 15");
  }
const factorial=(x)=>{
  let result=1n;
  for(let i=2n; i<=x; i++){
    result*=i
  }
  return result;
}
const bigN=BigInt(n)
return Number(
  factorial(2n*bigN)/(factorial(bigN+1n)*factorial(bigN))
)
}

module.exports = { countWellFormedParenthesis };
