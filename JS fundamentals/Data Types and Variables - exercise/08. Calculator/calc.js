function solve(num1, operator, num2) {
  [num1, num2] = [Number(num1), Number(num2)];
  let operators = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "*": (num1, num2) => num1 * num2,
    "/": (num1, num2) => num1 / num2,
    "%": (num1, num2) => num1 % num2,
  };
  return operators[operator](num1, num2).toFixed(2);
}
