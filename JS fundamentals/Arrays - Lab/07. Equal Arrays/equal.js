function solve(input1, input2) {
  let fristInput = input1;

  let current1 = 0;
  let current2 = 0;

  let result = 0;
  let index = 0;
  let check = false;

  let n = fristInput.length;

  for (let i = 0; i < n; i++) {
    current1 = Number(input1[i]);
    current2 = Number(input2[i]);

    if (current1 !== current2) {
      index = i;
      check = true;
      break;
    } else {
      result += current1;
    }
  }
  if (check) {
    return `Arrays are not identical. Found difference at ${index} index`;
  } else {
    return `Arrays are identical. Sum: ${result}`;
  }
}
