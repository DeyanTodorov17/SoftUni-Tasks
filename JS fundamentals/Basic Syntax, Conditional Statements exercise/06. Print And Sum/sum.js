function leapYear(number1, number2) {
  number1 = Number(number1);
  number2 = Number(number2);

  let allNumbers = "";
  let resultOfNumbers = 0;

  for (let i = number1; i <= number2; i++) {
    allNumbers += String(i) + " ";
    resultOfNumbers += i;
  }
  console.log(allNumbers);
  console.log(`Sum: ${resultOfNumbers}`);
}
