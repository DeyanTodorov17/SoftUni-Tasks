function solution(distance, passagers, fuelPrice) {
  let emptyBusConsomation = (distance / 100) * 7;
  let needFuel = emptyBusConsomation + passagers * 0.1;
  return `Needed money for that trip is ${needFuel * fuelPrice}lv.`;
}

