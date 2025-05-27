import org.junit.jupiter.api.Test;
import java.math.BigInteger;
import static org.junit.jupiter.api.Assertions.*;

public class CatalanCalculatorTest {

    @Test
    public void testValidCases() {
        assertEquals(BigInteger.ONE, CatalanCalculator.countWellFormedParenthesis(1));
        assertEquals(BigInteger.valueOf(5), CatalanCalculator.countWellFormedParenthesis(3));
        assertEquals(BigInteger.valueOf(42), CatalanCalculator.countWellFormedParenthesis(5));
        assertEquals(BigInteger.valueOf(16796), CatalanCalculator.countWellFormedParenthesis(10));
    }

    @Test
    public void testInvalidCases() {
        assertThrows(IllegalArgumentException.class, () -> CatalanCalculator.countWellFormedParenthesis(0));
        assertThrows(IllegalArgumentException.class, () -> CatalanCalculator.countWellFormedParenthesis(16));
    }
}
