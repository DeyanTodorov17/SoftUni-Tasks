function solve(data) {
  let splitter = /[, ]+/g;

  let myWords = data[0].split(splitter);
  let heroes = {};

  myWords.map((x) => {
    let mathOperations = [];
    let damage = math(x, mathOperations);
    let health = asciiSums(x);
    heroes[x] = { health, damage };
  });

  Object.keys(heroes)
    .sort((a, b) => a.localeCompare(b))
    .map((x) => {
      console.log(
        `${x} - ${heroes[x].health} health, ${heroes[x].damage.toFixed(
          2
        )} damage`
      );
    });
  function asciiSums(string) {
    let result = 0;
    let letterPattern = /[^\d+\-\*/\.]/g;
    let exec = letterPattern.exec(string);
    while (exec) {
      result += exec[0].charCodeAt(0);
      exec = letterPattern.exec(string);
    }
    return result;
  }

  function math(string, mathOperations) {
    let digitsPattern = /[-+]?[0-9]+\.?\d*/g;

    let exec = digitsPattern.exec(string);
    let result = 0;
    while (exec) {
      result += Number(exec[0]);
      exec = digitsPattern.exec(string);
    }

    result = addMathOperations(result);

    function addMathOperations(result) {
      let operationPattern = /[*/]/g;
      let operationExec = operationPattern.exec(string);
      while (operationExec) {
        mathOperations.push(operationExec[0]);
        operationExec = operationPattern.exec(string);
      }

      if (mathOperations.length) {
        mathOperations.map((x) => {
          if (x === "/") {
            result /= 2;
          } else {
            result *= 2;
          }
        });
      }
      return result;
    }

    return result;
  }
}
