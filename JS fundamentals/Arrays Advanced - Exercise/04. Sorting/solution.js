function solve(input) {
  let arr = input.sort((a, b) => b - a);
  let biggest = [];
  let smallest = [];
  if (arr.length % 2 !== 0) {
    biggest = arr.splice(0, (arr.length + 1) / 2);
    smallest = arr.sort((a, b) => a - b);
  } else {
    biggest = arr.splice(0, arr.length / 2);
    smallest = arr.sort((a, b) => a - b);
  }

  let result = [];

  biggest.map((x, i) => {
    result.push(x);
    result.push(smallest[i]);
  });

  return result.join(" ");
}
