function solve(a, b) {
  let factorialA = 1;
  for (let i = a; i > 0; i--) {
    factorialA *= i;
  }
  let factorialB = 1;
  for (let i = b; i > 0; i--) {
    factorialB *= i;
  }
  return (factorialA / factorialB).toFixed(2);
}
