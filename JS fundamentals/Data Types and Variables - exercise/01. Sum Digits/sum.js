function solve(nums) {
    return nums
      .toString()
      .split("")
      .reduce((a, b) => {
        a += Number(b);
        return a;
      }, 0);
  }