function solve(input = []) {
  let players = new Set();

  input.forEach((line) => {
    let tokens = line.split(" -> ");
    let name = tokens[0];
    let num = tokens[1];

    if (players[name] === undefined) {
      players[name] = [];
    }
    if (!players[name].includes(num)) {
      players[name].push(num);
    }
  });
  let sortArray = Object.entries(players);

  sortArray.sort((a, b) => a[0].localeCompare(b[0]));

  let finalObj = Object.fromEntries(sortArray);

  let keys = Object.keys(finalObj);
  for (const key of keys) {
    console.log(key);
    finalObj[key].forEach((x) => {
      console.log(`-- ${x}`);
    });
  }
}
