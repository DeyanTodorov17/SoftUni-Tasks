function solve(grade) {
  grade = Number(grade);

  let result = "";
  let fail = false;

  if (grade <= 2.99) {
    fail = true;
    result = "Fail";
  } else if (grade <= 3.49) {
    result = "Poor";
  } else if (grade <= 4.49) {
    result = "Good";
  } else if (grade <= 5.49) {
    result = "Very good";
  } else {
    result = "Excellent";
  }
  if (fail) {
    return `${result} (2)`;
  } else {
    return `${result} (${grade.toFixed(2)})`;
  }
}
