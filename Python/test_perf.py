import time
from main import countWellFormedParenthesis

start = time.time()

for n in range(1, 16):
    result = countWellFormedParenthesis(n)
    print(f"n={n}, count={result}")

end = time.time()
print(f"Total time: {(end - start):.6f} seconds")
