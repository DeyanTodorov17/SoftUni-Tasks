function solve(input) {
  let regex = /([^\\]+)\.(.*)/g;
  let exec = regex.exec(input);
  while (exec) {
    console.log(`File name: ${exec[1]}`);
    console.log(`File extension: ${exec[2]}`);
    exec = regex.exec(input);
  }
}
