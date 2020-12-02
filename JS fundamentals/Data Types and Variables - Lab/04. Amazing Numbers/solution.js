function solution(num) {
  let result = 0;
  num
    .toString()
    .split("")
    .map((x) => {
      result += Number(x);
    });
  result = result.toString();
  result.includes("9")
    ? console.log(`${num} Amazing? True`)
    : console.log(`${num} Amazing? False`);
}

