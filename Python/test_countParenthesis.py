import unittest
from main import countWellFormedParenthesis

class TestCatalanFunction(unittest.TestCase):
    def test_valid_cases(self):
        self.assertEqual(countWellFormedParenthesis(1), 1)
        self.assertEqual(countWellFormedParenthesis(3), 5)
        self.assertEqual(countWellFormedParenthesis(5), 42)
        self.assertEqual(countWellFormedParenthesis(10), 16796)

    def test_invalid_cases(self):
        with self.assertRaises(ValueError):
            countWellFormedParenthesis(0)
        with self.assertRaises(ValueError):
            countWellFormedParenthesis(16)

if __name__ == "__main__":
    unittest.main()
