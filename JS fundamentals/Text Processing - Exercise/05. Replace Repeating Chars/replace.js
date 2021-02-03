function solve(string) {
  return string
    .split("")
    .reduce((a, v) => {
      if (a[a.length - 1] !== v) {
        a.push(v);
      }
      return a;
    }, [])
    .join("");
}
