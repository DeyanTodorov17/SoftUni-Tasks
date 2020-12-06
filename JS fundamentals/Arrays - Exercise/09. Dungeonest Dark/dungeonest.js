function solve(input = []) {
  let newArray = input[0].split("|");

  let [command, currentPoints,counter,myCoins,myHealth,isDead]  = ["",0,0,0,100,false]

  for (let room of newArray) {
    let tokens = room.split(" ");
    command = tokens[0];
    currentPoints = Number(tokens[1]);

    if (command === "potion") {
      counter++;
      myHealth += currentPoints;
      if (myHealth > 100) {
        let diff = currentPoints - (myHealth - 100);
        console.log(`You healed for ${diff} hp.`);
        myHealth = 100;
      } else {
        console.log(`You healed for ${currentPoints} hp.`);
      }
      console.log(`Current health: ${myHealth} hp.`);
    } else if (command === "chest") {
      counter++;
      myCoins += currentPoints;
      console.log(`You found ${currentPoints} coins.`);
    } else {
      counter++;
      myHealth -= currentPoints;
      if (myHealth > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        isDead = true;
        break;
      }
    }
  }
  if (isDead) {
    console.log(`You died! Killed by ${command}.`);
    console.log(`Best room: ${counter}`);
  } else {
    console.log(`You've made it!`);
    console.log(`Coins: ${myCoins}`);
    console.log(`Health: ${myHealth}`);
  }
}
