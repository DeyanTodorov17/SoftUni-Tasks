function leapYear(year) {
  year = Number(year);

  if ((year % 4 == 0 || year % 400 == 0) && year !== 1900) {
    return "yes";
  } else {
    return "no";
  }
}
