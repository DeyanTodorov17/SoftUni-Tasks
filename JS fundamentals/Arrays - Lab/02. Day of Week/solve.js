function solve(day) {
  let Weekdays = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  if (day <= 7) {
    return Weekdays[day];
  } else {
    return "Invalid day!";
  }
}
