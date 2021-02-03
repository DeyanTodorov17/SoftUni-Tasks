function solve(words, string) {
  let allWords = words.split(", ");

  let myStringArray = string.split(" ");

  for (const word of allWords) {
    let counter = 0;
    for (const stringWord of myStringArray) {
      if (stringWord.includes("*") && stringWord.length === word.length) {
        myStringArray[counter] = word;
        break;
      }
      counter++;
    }
  }
  return myStringArray.join(" ");
}
