function solve(data) {
  let lines = data.shift();
  let attack = [];
  let destroyed = [];
  let linesNeed = data.splice(0, lines).map((x) => {
    let numsOfStar = findingNums(x);
    let currentMessage = x
      .split("")
      .map((char) => {
        let currentWord = char.charCodeAt(0) - numsOfStar;
        return String.fromCharCode(currentWord);
      })
      .join("");
    let pattern = /@([A-Za-z]+)[^@\-\!:>]*:(\d+)[^@\-\!:>]!([AD{1}])![^@\-\!:>]*->(\d+)/;
    let exec = pattern.exec(currentMessage);
    if (exec) {
      if (exec[3] === "D") {
        destroyed.push(exec[1]);
      } else {
        attack.push(exec[1]);
      }
    }
  });

  console.log(`Attacked planets: ${attack.length}`);
  if (attack.length) {
    attack
      .sort((a, b) => a.localeCompare(b))
      .map((x) => console.log(`-> ${x}`));
  }
  console.log(`Destroyed planets: ${destroyed.length}`);
  if (destroyed.length) {
    destroyed
      .sort((a, b) => a.localeCompare(b))
      .map((x) => console.log(`-> ${x}`));
  }

  function findingNums(string) {
    let starPattern = /[starSTAR]/g;
    let exec = starPattern.exec(string);
    let counter = 0;
    while (exec) {
      counter++;
      exec = starPattern.exec(string);
    }
    return counter;
  }
}
