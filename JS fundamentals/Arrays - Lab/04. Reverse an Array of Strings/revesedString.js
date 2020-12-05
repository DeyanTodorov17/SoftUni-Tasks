function solve(input) {
  let current = "";
  let result = "";
  for (let i = input.length - 1; i >= 0; i--) {
    current = input[i];
    result += current + " ";
  }
  return result;
}
