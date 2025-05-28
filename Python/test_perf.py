import unittest
import time
from main import countWellFormedParenthesis

class TestPerformance(unittest.TestCase):
    def test_performance_loop(self):
        start = time.time()

        for n in range(1, 16):
            result = countWellFormedParenthesis(n)
            self.assertIsInstance(result, int)  

        end = time.time()
        duration = end - start
        
        self.assertLess(duration, 1.0, f"Performance test took too long: {duration:.6f} seconds")

if __name__ == '__main__':
    unittest.main()

