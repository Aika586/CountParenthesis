import math
def countWellFormedParenthesis(n: int) -> int:
    if not 1 <= n <= 15:
        raise ValueError("n must be between 1 and 15")

    return math.comb(2 * n, n) // (n + 1)
if __name__ == "__main__":
    print(countWellFormedParenthesis(3))