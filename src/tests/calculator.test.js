const {
  addition,
  subtraction,
  multiplication,
  division,
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
});

describe("calculate dispatcher", () => {
  test("handles all supported operators from the image examples", () => {
    expect(calculate(2, "+", 3)).toBe(5);
    expect(calculate(10, "-", 4)).toBe(6);
    expect(calculate(45, "*", 2)).toBe(90);
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("throws for unsupported operators", () => {
    expect(() => calculate(5, "^", 2)).toThrow(
      "Invalid operator. Use one of: +, -, *, /"
    );
  });

  test("propagates division by zero from dispatcher", () => {
    expect(() => calculate(10, "/", 0)).toThrow(
      "Division by zero is not allowed."
    );
  });
});
