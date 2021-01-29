function solve(input) {
  let myList = input.reduce((a, b, i, d) => {
    let json = JSON.parse(b);
    let term = Object.keys(json);
    let values = Object.values(json);
    a[term[0]] = values[0];
    return a;
  }, {});
  myList = sorting(myList);
  function sorting(obj) {
    let arr = Object.entries(obj).sort((a, b) => {
      return a[0].localeCompare(b[0]);
    });
    let result = Object.fromEntries(arr);
    return result;
  }

  let keys = Object.keys(myList);
  keys.map((key) => {
    console.log(`Term: ${key} => Definition: ${myList[key]}`);
  });
}
