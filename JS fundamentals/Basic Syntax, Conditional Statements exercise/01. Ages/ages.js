function solve(age) {
  age = Number(age);
  if (age === 0 || age === 1 || age === 2) {
    console.log("baby");
  } else if (age <= 13 && age > 0) {
    console.log("child");
  } else if (age <= 19 && age > 0) {
    console.log("teenager");
  } else if (age <= 65 && age > 0) {
    console.log("adult");
  } else if (age >= 66 && age > 0) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}
