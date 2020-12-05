function solve(input = []) {
  input.reverse();
  let currMax = Number.MIN_SAFE_INTEGER;
  let res = [];
  input.map((x) => {
    if (x > currMax) {
      res.push(x);
      currMax = x;
    }
  });
  return res.reverse().join(" ");
}
