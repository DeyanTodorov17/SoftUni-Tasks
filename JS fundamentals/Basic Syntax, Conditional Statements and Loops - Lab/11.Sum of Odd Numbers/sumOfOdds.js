function solution(n) {
  let result = 0;
  let counter = 0;
  for (let i = 1; i <= n * 2; i++) {
    if (counter === n) {
      break;
    }
    if (i % 2 !== 0) {
      counter++;
      console.log(i);
      result += i;
    }
  }
  return `Sum: ${result}`
}


