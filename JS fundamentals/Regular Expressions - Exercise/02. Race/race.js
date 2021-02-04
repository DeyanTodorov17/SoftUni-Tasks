function solve(data) {
  let racers = data
    .shift()
    .split(", ")
    .reduce((a, b) => {
      a[b] = 0;
      return a;
    }, {});
  let command = data.shift();

  while (command !== "end of race") {
    let currentName = findName(command);
    let currentMetters = findMeters(command);

    if (racers.hasOwnProperty(currentName)) {
      racers[currentName] += currentMetters;
    }

    command = data.shift();
  }

  function findName(string) {
    let lettersPattern = /[a-zA-Z]/g;
    let name = "";
    let exec = lettersPattern.exec(string);
    while (exec) {
      name += exec[0];
      exec = lettersPattern.exec(string);
    }
    return name;
  }
  function findMeters(string) {
    let digitPattern = /\d/g;
    let meters = 0;
    let exec = digitPattern.exec(string);
    while (exec) {
      meters += Number(exec[0]);
      exec = digitPattern.exec(string);
    }
    return meters;
  }

  let sort = Object.keys(racers)
    .sort((a, b) => {
      return racers[b] - racers[a];
    })
    .splice(0, 3);
  console.log(`1st place: ${sort[0]}`);
  console.log(`2nd place: ${sort[1]}`);
  console.log(`3rd place: ${sort[2]}`);
}
