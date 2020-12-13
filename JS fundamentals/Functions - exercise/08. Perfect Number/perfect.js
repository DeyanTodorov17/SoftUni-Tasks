function solve(num) {
  let sum = 1;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  if (sum === num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
