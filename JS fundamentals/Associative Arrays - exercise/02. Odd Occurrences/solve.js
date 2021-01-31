function solve(data) {
  let myMap = new Map();

  data
    .split(" ")
    .map((x) => x.toLowerCase())
    .map((x) => {
      if (!myMap.has(x)) {
        myMap.set(x, 0);
      }
      let current = myMap.get(x) + 1;
      myMap.set(x, current);
    });

  let result = "";
  Array.from(myMap)
    .filter((x) => x[1] % 2 !== 0)
    .map((x) => {
      result += x[0] + " ";
    });
  return result.trim();
}
