function solve(n, nums) {
  n = Number(n);

  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i]);
  }
  let arrLenght = arr.length;
  let result = "";

  for (let j = arrLenght - 1; j >= 0; j--) {
    let currentNum = String(arr[j]);
    result += currentNum + " ";
  }
  return result
}
