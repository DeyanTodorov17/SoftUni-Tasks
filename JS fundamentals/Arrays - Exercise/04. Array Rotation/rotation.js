function solve(input, rotations) {
  for (let i = 0; i < rotations; i++) {
    let shift = input.shift();
    input.push(shift);
  }
  return input.join(" ");
}
