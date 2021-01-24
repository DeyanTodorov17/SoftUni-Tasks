function solve(input) {
  let currentWagon = input.shift().split(" ").map(Number);
  let capacity = Number(input.shift());

  function addingWagon(arr, ppl, max) {
    if (ppl <= max) {
      arr.push(ppl);
    }
    return arr;
  }
  function searching(arr, ppl, max) {
    for (const currentWagon of arr) {
      let adding = currentWagon + ppl;
      if (adding <= max) {
        let index = arr.indexOf(currentWagon);
        arr[index] += ppl;
        break;
      }
    }
    return arr;
  }

  input.map((line) => {
    let tokens = line.split(" ");
    tokens.length === 2
      ? addingWagon(currentWagon, Number(tokens[1]), capacity)
      : searching(currentWagon, Number(tokens[0]), capacity);
  });
  return currentWagon.join(" ");
}
