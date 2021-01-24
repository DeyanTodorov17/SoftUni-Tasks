function solve(...input) {
  let commands = input[1];
  let totalNums = Number(commands[0]);
  let deleting = Number(commands[1]);
  let searchingNum = Number(commands[2]);

  let myNumbers = input[0].splice(0, totalNums);
  myNumbers.splice(0, deleting);
  let filtred = myNumbers.filter((x) => x === searchingNum);

  return `Number ${searchingNum} occurs ${filtred.length} times.`;
}
