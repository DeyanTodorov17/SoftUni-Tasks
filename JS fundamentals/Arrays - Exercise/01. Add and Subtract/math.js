function solve(input) {
  let newArray = [];
  let originalSum = 0;
  let newSum = 0;

  let currentNum = 0;
  let newNum = 0;

  for (let i = 0; i <= input.length - 1; i++) {
    currentNum = input[i];
    originalSum += currentNum;

    if (currentNum % 2 == 0) {
      newNum = currentNum + i;
    } else {
      newNum = currentNum - i;
    }
    newArray.push(newNum);
  }
  for (let j = 0; j <= newArray.length - 1; j++) {
    currentNum = newArray[j];
    newSum += currentNum;
  }
  console.log(newArray);
  console.log(originalSum);
  console.log(newSum);
}
