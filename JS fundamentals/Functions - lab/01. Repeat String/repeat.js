function solve(str, n) {
  let text = str;
  n = Number(n);
  let result = "";

  for (let i = 0; i < n; i++) {
    result += text;
  }

  return result;
}
