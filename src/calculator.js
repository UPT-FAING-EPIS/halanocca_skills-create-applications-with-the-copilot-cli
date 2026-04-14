#!/usr/bin/env node

/**
 * Supported calculator operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (*)
 * - division (/)
 * - modulo (%)
 * - exponentiation (^)
 * - square root (sqrt)
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

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
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
    case "%":
      return modulo(a, b);
    case "^":
      return power(a, b);
    case "sqrt":
      return squareRoot(a);
    default:
      throw new Error(
        "Invalid operator. Use one of: +, -, *, /, %, ^, sqrt"
      );
  }
}

function printUsage() {
  console.error("Usage: node src/calculator.js <number> <operator> [number]");
  console.error("Example: node src/calculator.js 8 * 3");
  console.error("Square root example: node src/calculator.js 9 sqrt");
  console.error("Operators: +, -, *, /, %, ^, sqrt");
}

if (require.main === module) {
  const [, , leftArg, operator, rightArg] = process.argv;

  if (!leftArg || !operator) {
    printUsage();
    process.exit(1);
  }

  const left = Number(leftArg);
  const isSquareRoot = operator === "sqrt";
  const right = Number(rightArg);

  if (!Number.isFinite(left) || (!isSquareRoot && !Number.isFinite(right))) {
    console.error("Operands must be valid numbers.");
    printUsage();
    process.exit(1);
  }

  if (!isSquareRoot && !rightArg) {
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
  modulo,
  power,
  squareRoot,
  calculate,
};
