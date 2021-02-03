function solve(string) {
  let pattern = /\B#[a-zA-Z]+\b/g;
  let result = [];

  let exec = pattern.exec(string);
  while (exec) {
    result.push(exec[0].substring(1));
    exec = pattern.exec(string);
  }
  return result.join("\n");
}
