function solve(...abc) {
  let min = abc[0];
  abc.map((x) => {
    if (x < min) {
      min = x;
    }
  });
  return min;
}
