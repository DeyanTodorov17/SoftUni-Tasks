function solve(precents) {
  let IsNotReady = true;
  if (precents === 100) {
    console.log(`100% Complete!`);
    console.log(`[%%%%%%%%%%]`);
    IsNotReady = false;
  }
  if (IsNotReady) {
    let dots = 10 - precents / 10;
    let result = "";
    for (let i = 0; i < precents / 10; i++) {
      result += "%";
    }
    for (let i = 0; i < dots; i++) {
      result += ".";
    }
    console.log(`${precents}% [${result}]`);
    console.log(`Still loading...`);
  }
}
