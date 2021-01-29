function solve(input) {
  let list = input.reduce((a, b) => {
    a[b] = b.length;
    return a;
  }, {});
  let keys = Object.keys(list);
  keys.map((key) => {
    console.log(`Name: ${key} -- Personal Number: ${list[key]}`);
  });
}
