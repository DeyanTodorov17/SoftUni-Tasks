function solve(input) {
  let currentNums = 0;

  let result = "";
  let max = -1;
  let counter = 0;
  let otherNum = 0;

  for (let i = 0; i < input.length; i++) {
    currentNums = input[i];

    if (currentNums === input[i + 1]) {
      counter++;
      if (counter > max) {
        max = counter;
        otherNum = currentNums;
      }
    } else {
      counter = 0;
    }
  }
  for (let j = 0; j <= max; j++) {
    result += String(otherNum) + " ";
  }
  return result;
}
