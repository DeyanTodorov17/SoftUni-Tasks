function solve(input) {
  let strings = input.map((x) => String(x));
  strings.map((x) => {
    let reversed = x.split("").reverse().join("");
    x === reversed ? console.log("true") : console.log("false");
  });
}
