function solve(num1, num2, operator) {
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  const add = (a, b) => a + b;
  const subtrac = (a, b) => a - b;

  switch (operator) {
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtrac(num1, num2);
  }
}
