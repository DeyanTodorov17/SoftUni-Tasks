function solve(string) {
  return `${string
    .substring(0, string.length / 2)
    .split("")
    .reverse()
    .join("")}\n${string
    .substring(string.length / 2)
    .split("")
    .reverse()
    .join("")}`;
}
