function solve(passoword) {
  function searchingLength(str) {
    let pattern = /^.{6,10}$/;
    let match = str.match(pattern);
    if (match !== null) {
      return true;
    } else {
      return false;
    }
  }
  function searchingLetters(str) {
    let pattern = /^[a-zA-Z0-9]+$/;
    let match = str.match(pattern);
    if (match !== null) {
      return true;
    } else {
      return false;
    }
  }
  function searchingDigits(str) {
    str = str.split("");
    let counter = 0;
    for (const symbol of str) {
      let current = Number(symbol);
      if (!isNaN(current)) {
        counter++;
      }
    }
    if (counter >= 2) {
      return true;
    } else {
      return false;
    }
  }
  let length = searchingLength(passoword);
  let letters = searchingLetters(passoword);
  let digits = searchingDigits(passoword);
  if (length && letters && digits) {
    console.log("Password is valid");
  }
  if (!length) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!letters) {
    console.log("Password must consist only of letters and digits");
  }
  if (!digits) {
    console.log("Password must have at least 2 digits");
  }
}
