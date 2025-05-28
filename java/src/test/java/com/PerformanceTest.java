package com;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PerformanceTest {
    @Test
    void testPerformanceOfCatalanComputation() {
        long start = System.nanoTime();
        for (int n = 1; n <= 15; n++) {
            CatalanCalculator.countWellFormedParenthesis(n);
        }
        long end = System.nanoTime();

        double durationMs = (end - start) / 1e6;

        // Можно добавить простой ассерт: например, не дольше 100ms
        assertTrue(durationMs < 100, "Performance degraded: " + durationMs + " ms");
    }
}
