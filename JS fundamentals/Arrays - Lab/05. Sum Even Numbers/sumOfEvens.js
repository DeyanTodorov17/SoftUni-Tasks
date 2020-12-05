function solve(input) {
  return input.reduce((a, b, i) => {
    b = Number(b);
    if (b % 2 === 0) {
      a += b;
    }
    return a;
  }, 0);
}
