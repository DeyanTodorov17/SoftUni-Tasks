function replacing(a, b, expected) {
  let result = a.replace("_", b);
  return result === expected ? `Matched` : `Not Matched`;
}
console.log(replacing('Str_ng', 'i', 'String'));
