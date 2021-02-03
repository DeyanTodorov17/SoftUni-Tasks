function solve(wordNeed, str) {
  return str.split(" ")
    .map((word) => word.toLowerCase())
    .includes(wordNeed.toLowerCase()) ? wordNeed.toLowerCase() : `${wordNeed.toLowerCase()} not found!`;
}
