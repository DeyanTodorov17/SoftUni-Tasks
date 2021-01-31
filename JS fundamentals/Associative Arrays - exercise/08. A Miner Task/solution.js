function solve(input = []) {
  let mySources = new Set();

  input.forEach((line, index) => {
    let lastSource = input[index - 1];
    if (index % 2 == 0) {
      if (mySources[line] === undefined) {
        mySources[line] = [];
      }
    } else {
      if (mySources[lastSource] !== undefined) {
        mySources[lastSource].push(line);
      }
    }
  });

  let finalSources = {};
  let keys = Object.keys(mySources);
  for (const key of keys) {
    let comapnyName = key;
    let needSum = 0;
    mySources[key].forEach((el) => {
      needSum += Number(el);
    });

    finalSources[comapnyName] = needSum;
    console.log(`${comapnyName} -> ${needSum}`);
  }
}
