function diviseble(guests, typeGroup, day) {
  guests = Number(guests);
  typeGroup = typeGroup;
  day = day;

  let priceForOneNight = 0;

  if (typeGroup === "Students") {
    switch (day) {
      case "Friday":
        priceForOneNight = 8.45;
        break;
      case "Saturday":
        priceForOneNight = 9.8;
        break;
      case "Sunday":
        priceForOneNight = 10.46;
        break;
    }
  } else if (typeGroup === "Business") {
    switch (day) {
      case "Friday":
        priceForOneNight = 10.9;
        break;
      case "Saturday":
        priceForOneNight = 15.6;
        break;
      case "Sunday":
        priceForOneNight = 16;
        break;
    }
  } else {
    switch (day) {
      case "Friday":
        priceForOneNight = 15;
        break;
      case "Saturday":
        priceForOneNight = 20;
        break;
      case "Sunday":
        priceForOneNight = 22.5;
        break;
    }
  }

  let totalPrice = guests * priceForOneNight;

  if (typeGroup === "Students" && guests >= 30) {
    totalPrice -= (totalPrice * 15) / 100;
  } else if (typeGroup === "Business" && guests >= 100) {
    totalPrice = totalPrice - 10 * priceForOneNight;
  } else if (typeGroup === "Regular" && guests >= 10 && guests <= 20) {
    totalPrice -= (totalPrice * 5) / 100;
  }

  return `Total price: ${totalPrice.toFixed(2)}`;
}
