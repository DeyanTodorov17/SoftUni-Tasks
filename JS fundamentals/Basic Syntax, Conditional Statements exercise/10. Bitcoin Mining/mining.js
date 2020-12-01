function solve(input) {
  let totalDays = Number(input.length);

  let bitcoinPrice = 11949.16;
  let goldPrice = 67.51;
  let index = 0;

  let goldPerDay = 0;
  let totalMoney = 0;
  let moneyPerDay = 0;
  let totalBitcoins = 0;
  let bitcoinsPerDay = 0;

  let stealCounter = 0;

  let fristDayChek = true;
  let isBits = true;
  let fristday = 0;

  for (let i = 0; i < totalDays; i++) {
    goldPerDay = Number(input[index]);
    index++;
    stealCounter++;
    if (stealCounter === 3) {
      goldPerDay = goldPerDay - goldPerDay * 0.3;
      stealCounter = 0;
    }
    moneyPerDay = goldPerDay * goldPrice;
    totalMoney += moneyPerDay;

    if (totalMoney >= bitcoinPrice) {
      if (fristDayChek) {
        fristday = i + 1;
        fristDayChek = false;
        isBits = false;
      }
      bitcoinsPerDay = totalMoney / bitcoinPrice;
      bitcoinsPerDay = Math.floor(bitcoinsPerDay);

      totalMoney -= bitcoinsPerDay * bitcoinPrice;
      totalBitcoins += bitcoinsPerDay;
    }
  }
  console.log(`Bought bitcoins: ${totalBitcoins}`);
  if (!isBits) {
    console.log(`Day of the first purchased bitcoin: ${fristday}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
