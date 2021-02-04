function solve(input) {
  let emailPattern = /(?:^| )[a-zA-Z]+\.?\-?[\w]*\b@[a-z]+\.?\-?[a-zA-Z]+\.?\-?[a-zA-Z]+\.[a-z]+/g;
  let txt = input.splice(0, input.indexOf("end"));

  txt.forEach((line) => {
    let isMatched = line.match(emailPattern);
    if (line.match(emailPattern)) {
      for (const matchingEmail of isMatched) {
        console.log(matchingEmail);
      }
    }
  });
}
