function solve(input = []) {
  let isMatch = false;
  for (let i = 0; i < input.length; i++) {

    let right = 0;
    let left = 0;

    for (let j = 0; j < i; j++) {
      if (i === 0) {
        break;
      } else {
        left += input[j];
      }
    }

    for (let k = i + 1; k < input.length; k++) {
      if (i === input.length) {
        break;
      } else {
        right += input[k];
      }
    }

    if (right == left) {
      console.log(i);
      isMatch = true;
      break;
    }
  }
  if (!isMatch) {
    console.log("no");
  }
}
