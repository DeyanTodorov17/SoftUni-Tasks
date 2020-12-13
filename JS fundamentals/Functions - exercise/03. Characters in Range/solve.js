function solve(a, b) {
  let [charA, charB] = [a.charCodeAt(0), b.charCodeAt(0)];
  let final = Math.max(charA, charB);
  let start = Math.min(charA, charB);
  let result = "";
  for (let i = start + 1; i < final; i++) {
    result += String.fromCharCode(i) + " ";
  }
  return result;
}
