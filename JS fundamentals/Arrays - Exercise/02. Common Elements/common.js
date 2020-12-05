function solve(input1, input2) {
  let n = 0;
  if (input1.length >= input2.length) {
    n = input1.length;
  } else {
    n = input2.length;
  }

  let current1 = "";
  let current2 = "";
  let needArray = [];

  for (let i = 0; i < n; i++) {
    current1 = input1[i];
    current2 = input2[i];
    if (current1 !== undefined || !isNaN(current1)) {
      needArray.push(current1);
    }
    if (current2 !== undefined || !isNaN(current2)) {
      needArray.push(current2);
    }
  }
  n = needArray.length;
  let lastArray = [];
  let newCurrent = "";
  for (let j = 0; j < n; j++) {
    newCurrent = needArray[j];
    if (lastArray.includes(newCurrent)) {
      console.log(newCurrent);
    }
    lastArray.push(newCurrent);
  }
}
