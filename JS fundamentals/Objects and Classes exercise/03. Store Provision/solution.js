function solve(...input) {
  let originalList = input.shift().reduce((a, b, i, d) => {
    if (i % 2 == 0) {
      a[b] = Number(d[i + 1]);
    }
    return a;
  }, {});
  let secondList = input.shift();

  function adding(oldObj, newObj) {
    newObj.map((x, i) => {
      if (i % 2 === 0) {
        if (oldObj.hasOwnProperty(x)) {
          oldObj[x] += Number(newObj[i + 1]);
        } else {
          oldObj[x] = Number(newObj[i + 1]);
        }
      }
    });
    return oldObj;
  }
  originalList = adding(originalList, secondList);
  let keys = Object.keys(originalList);
  keys.map((key) => console.log(`${key} -> ${originalList[key]}`));
}
