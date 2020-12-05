function solve(input) {
  let currentNum = 0;
  let odds = 0;
  let evens = 0;

  for (let i = 0; i < input.length; i++) {
    currentNum = Number(input[i]);
    if (currentNum % 2 == 0) {
      evens += currentNum;
    } else if (currentNum % 2 != 0) {
      odds += currentNum;
    }
  }

  return evens - odds;
}
