function solve(input, magicNuum) {
  let magicNum = magicNuum;

  let currentNum = 0;

  for (let i = 0; i <= input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      currentNum = input[i] + input[j];
      if (currentNum == magicNum) {
        console.log(`${input[i]} ${input[j]}`);
      }
    }
  }
}
