
import java.math.BigInteger;
public class PerformanceTest {
    public static void main(String[] args) {
        long start = System.nanoTime();

        for (int n = 1; n <= 15; n++) {
            BigInteger result = CatalanCalculator.countWellFormedParenthesis(n);
            System.out.println("n=" + n + ", count=" + result);
        }

        long end = System.nanoTime();
        System.out.printf("Total time: %.6f ms%n", (end - start) / 1e6);
    }
}
