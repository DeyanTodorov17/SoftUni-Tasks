function solve(input = []) {
  let reservations = [];
  let regularGuests = [];
  let vipGuests = [];
  let command = input.shift();

  while (command !== "PARTY") {
    reservations.push(command);
    command = input.shift();
  }
  input.forEach((currentGuest) => {
    if (reservations.includes(currentGuest)) {
      let indexOfGuest = reservations.indexOf(currentGuest);
      reservations.splice(indexOfGuest, 1);
    }
  });
  reservations.forEach((leftGuests) => {
    if (isNaN(leftGuests[0])) {
      regularGuests.push(leftGuests);
    } else {
      vipGuests.push(leftGuests);
    }
  });
  console.log(vipGuests.length + regularGuests.length);
  vipGuests.forEach((vipguest) => console.log(vipguest));
  regularGuests.forEach((regularguest) => console.log(regularguest));
}
