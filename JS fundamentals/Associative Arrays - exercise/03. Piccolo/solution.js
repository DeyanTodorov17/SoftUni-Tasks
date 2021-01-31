function solve(input = []) {
  let myNumbers = [];

  for (let line of input) {
    [command, number] = line.split(", ");
    if (command == "IN" && !myNumbers.includes(number)) {
      myNumbers.push(number);
    } else if (command == "OUT") {
      if (myNumbers.includes(number)) {
        let deletingIndex = myNumbers.indexOf(number);
        myNumbers.splice(deletingIndex, 1);
      }
    }
  }
  if (myNumbers[0] === undefined) {
    console.log("Parking Lot is Empty");
  } else {
    myNumbers.sort((a, b) => a.localeCompare(b));
    for (const number of myNumbers) {
      console.log(number);
    }
  }
}
