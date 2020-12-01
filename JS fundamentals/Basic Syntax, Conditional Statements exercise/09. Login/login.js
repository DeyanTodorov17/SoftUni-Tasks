function reverseString(input) {
  let username = input[0];
  let password = username.split("").reverse().join("");

  let currentTry = input[1];
  let index = 2;
  let counter = 0;
  let chek = false;

  while (currentTry !== password) {
    counter++;
    if (counter >= 4) {
      chek = true;
      break;
    }
    console.log("Incorrect password. Try again.");
    currentTry = input[index];
    index++;
  }

  if (chek) {
    return `User ${username} blocked!`;
  } else {
    return `User ${username} logged in.`;
  }
}
