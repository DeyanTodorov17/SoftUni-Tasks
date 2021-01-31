function solve(data) {
  let myWordsObject = data
    .shift()
    .split(" ")
    .reduce((a, b) => {
      a[b] = 0;
      return a;
    }, {});

  data.map((x) => {
    if (myWordsObject.hasOwnProperty(x)) {
      myWordsObject[x]++;
    }
  });

  myWordsObject = Object.entries(myWordsObject)
    .sort((a, b) => b[1] - a[1])
    .map((x) => console.log(`${x[0]} - ${x[1]}`));
}
