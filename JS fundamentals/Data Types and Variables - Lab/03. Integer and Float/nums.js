function sum(...a) {
  let result = a.reduce((a, b) => {
    a += b;
    return a;
  }, 0);
  let intiger = true;
  if (result % 1 !== 0) {
    intiger = false;
  }
  if (intiger) {
    return `${result} - Intiger`;
  } else {
    return `${result} - Float`;
  }
}
