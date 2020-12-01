function solve(myNumber, MyRounder) {
  let rounder = Number(MyRounder);
  let number = Number(myNumber);

  if (rounder > 15) {
    rounder = 15;
  }

  console.log(parseFloat(number.toFixed(rounder)));
}
