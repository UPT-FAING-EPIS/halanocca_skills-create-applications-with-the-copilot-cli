#!/usr/bin/env node

/**
 * Supported calculator operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (*)
 * - division (/)
 */

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return addition(a, b);
    case "-":
      return subtraction(a, b);
    case "*":
      return multiplication(a, b);
    case "/":
      return division(a, b);
    default:
      throw new Error(
        "Invalid operator. Use one of: +, -, *, /"
      );
  }
}

function printUsage() {
  console.error("Usage: node src/calculator.js <number> <operator> <number>");
  console.error("Example: node src/calculator.js 8 * 3");
  console.error("Operators: +, -, *, /");
}

if (require.main === module) {
  const [, , leftArg, operator, rightArg] = process.argv;

  if (!leftArg || !operator || !rightArg) {
    printUsage();
    process.exit(1);
  }

  const left = Number(leftArg);
  const right = Number(rightArg);

  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    console.error("Both operands must be valid numbers.");
    printUsage();
    process.exit(1);
  }

  try {
    const result = calculate(left, operator, right);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
};
