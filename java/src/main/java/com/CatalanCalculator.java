package com;
import java.math.BigInteger;

public class CatalanCalculator {
    public static BigInteger factorial(int n) {
        BigInteger result = BigInteger.ONE;
        for (int i = 2; i <= n; i++) {
            result = result.multiply(BigInteger.valueOf(i));
        }
        return result;
    }

    public static BigInteger countWellFormedParenthesis(int n) {
        if (n < 1 || n > 15) {
            throw new IllegalArgumentException("n must be between 1 and 15");
        }

        BigInteger numerator = factorial(2 * n);
        BigInteger denominator = factorial(n + 1).multiply(factorial(n));
        return numerator.divide(denominator);
    }
}