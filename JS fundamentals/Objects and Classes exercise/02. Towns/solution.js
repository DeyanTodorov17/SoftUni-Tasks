function solve(input) {
  let fristList = {};
  let secondList = {};
  input.map((line, i) => {
    let tokens = line.split(" | ");
    if (i === 0) {
      fristList["town"] = tokens[0];
      fristList["latitude"] = Number(tokens[1]).toFixed(2);
      fristList["longitude"] = Number(tokens[2]).toFixed(2);
      console.log(fristList);
    } else {
      secondList["town"] = tokens[0];
      secondList["latitude"] = Number(tokens[1]).toFixed(2);
      secondList["longitude"] = Number(tokens[2]).toFixed(2);
      console.log(secondList);
    }
  });
}
