function solve(...input) {
  let allNumbers = input.shift();
  let taskTokens = input.shift();
  let specialNum = taskTokens[0];
  let power = taskTokens[1];

  function leftSplice(arr, pow, index) {
    for (let i = 0; i < pow + 1; i++) {
      if (arr[index - i] !== undefined) {
        arr[index - i] = "deleteME";
      }
    }
    return arr;
  }
  function rightSplice(arr, pow, index) {
    for (let i = 1; i <= pow; i++) {
      if (arr[index + i] !== undefined) {
        arr[index + i] = "deleteME";
      }
    }
    return arr;
  }
  for (const num of allNumbers) {
    if (num === specialNum) {
      let indexOfNum = allNumbers.indexOf(specialNum);
      allNumbers = leftSplice(allNumbers, power, indexOfNum);
      allNumbers = rightSplice(allNumbers, power, indexOfNum);
    }
  }
  let sum = 0;
  let result = allNumbers.filter((x) => x !== "deleteME");
  if (result.length) {
    return result.reduce((a, b) => a + b);
  } else {
    return 0;
  }
}
