function solve(n) {
  let oddSum = 0;
  let evenSum = 0;
  n = String(n);
  n.split("").map((x) => {
    x = Number(x);
    x % 2 === 0 ? (evenSum += x) : (oddSum += x);
  });
  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
