function solve(string) {
  let currWord = "";
  return string
    .split("")
    .reduce((a, b, i, d) => {
      if (b === b.toUpperCase()) {
        a.push(currWord);
        currWord = "";
        currWord += b;
      } else {
        currWord += b;
      }
      if (i === d.length - 1) {
        a.push(currWord);
      }
      return a;
    }, [])
    .filter((x) => x != "")
    .join(", ");
}
