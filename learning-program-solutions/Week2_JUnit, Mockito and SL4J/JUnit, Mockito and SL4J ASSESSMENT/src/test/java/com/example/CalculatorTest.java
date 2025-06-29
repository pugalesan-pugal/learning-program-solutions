package com.example;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
public class CalculatorTest {
    private Calculator calculator;
    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete.");
    }
    @AfterEach
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete.");
    }
    @Test
    public void testAddition() {
        int a = 10;
        int b = 5;
        int result = calculator.add(a, b);
        assertEquals(15, result);
    }

    @Test
    public void testAdditionWithNegative() {
        int a = -4;
        int b = 6;
        int result = calculator.add(a, b);
        assertEquals(2, result);
    }
}
