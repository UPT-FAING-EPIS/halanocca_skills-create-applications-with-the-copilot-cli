const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
} = require("../calculator");

describe("calculator basic operation functions", () => {
  test("addition returns the sum", () => {
    expect(addition(2, 3)).toBe(5);
    expect(addition(-4, 10)).toBe(6);
  });

  test("subtraction returns the difference", () => {
    expect(subtraction(10, 4)).toBe(6);
    expect(subtraction(4, 10)).toBe(-6);
  });

  test("multiplication returns the product", () => {
    expect(multiplication(45, 2)).toBe(90);
    expect(multiplication(-3, 5)).toBe(-15);
  });

  test("division returns the quotient", () => {
    expect(division(20, 5)).toBe(4);
    expect(division(7, 2)).toBe(3.5);
  });

  test("division throws an error for division by zero", () => {
    expect(() => division(9, 0)).toThrow("Division by zero is not allowed.");
  });

  test("modulo returns the remainder", () => {
    expect(modulo(10, 3)).toBe(1);
    expect(modulo(20, 5)).toBe(0);
    expect(modulo(5, 2)).toBe(1);
  });

  test("modulo throws an error for division by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("power returns base raised to the exponent", () => {
    expect(power(2, 3)).toBe(8);
    expect(power(9, 0.5)).toBe(3);
    expect(power(5, 0)).toBe(1);
    expect(power(2, -2)).toBe(0.25);
  });

  test("squareRoot returns the square root", () => {
    expect(squareRoot(9)).toBe(3);
    expect(squareRoot(16)).toBe(4);
    expect(squareRoot(0)).toBe(0);
    expect(squareRoot(2)).toBeCloseTo(1.41421356);
  });

  test("squareRoot throws an error for negative numbers", () => {
    expect(() => squareRoot(-1)).toThrow(
      "Square root of a negative number is not allowed."
    );
  });
});

describe("extended operations from calc-extended-operations image", () => {
  test("modulo example: 5 % 2", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("power example: 2 ^ 3", () => {
    expect(calculate(2, "^", 3)).toBe(8);
  });

  test("square root example: sqrt 16", () => {
    expect(calculate(16, "sqrt")).toBe(4);
  });
});

describe("calculate dispatcher", () => {
  test("handles all supported operators from the image examples", () => {
    expect(calculate(2, "+", 3)).toBe(5);
    expect(calculate(10, "-", 4)).toBe(6);
    expect(calculate(45, "*", 2)).toBe(90);
    expect(calculate(20, "/", 5)).toBe(4);
    expect(calculate(10, "%", 3)).toBe(1);
    expect(calculate(2, "^", 3)).toBe(8);
    expect(calculate(9, "sqrt")).toBe(3);
  });

  test("throws for unsupported operators", () => {
    expect(() => calculate(5, "&", 2)).toThrow(
      "Invalid operator. Use one of: +, -, *, /, %, ^, sqrt"
    );
  });

  test("propagates division by zero from dispatcher", () => {
    expect(() => calculate(10, "/", 0)).toThrow(
      "Division by zero is not allowed."
    );
  });

  test("propagates square root error from dispatcher", () => {
    expect(() => calculate(-9, "sqrt")).toThrow(
      "Square root of a negative number is not allowed."
    );
  });
});
