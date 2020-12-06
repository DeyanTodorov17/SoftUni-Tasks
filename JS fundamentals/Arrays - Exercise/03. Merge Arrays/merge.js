function solve(input1, input2) {
  let current1 = 0;
  let current2 = 0;
  let result = "";
  let numResult = 0;
  let newArray = [];

  for (let i = 0; i <= input1.length - 1; i++) {
    current1 = String(input1[i]);
    current2 = String(input2[i]);

    if (i == 1 || i == 3) {
      if (i != input1.length - 1) {
        numResult = current1 + current2;
        result = String(numResult);
        newArray.push(result);
      } else {
        result += current1 + current2;
      }
    } else {
      if (i != input1.length - 1) {
        numResult = Number(current1) + Number(current2);
        result = String(numResult);
        newArray.push(result);
      } else {
        numResult = Number(current1) + Number(current2);
        result = String(numResult);
        newArray.push(result);
      }
    }
  }
  let newResult = "";
  for (let i = 0; i <= newArray.length - 1; i++) {
    if (i != newArray.length - 1) {
      newResult += newArray[i] + " - ";
    } else {
      newResult += newArray[i];
    }
  }
  console.log(newResult);
}
