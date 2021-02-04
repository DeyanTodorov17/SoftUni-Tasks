function solve(data) {
  let needLines = data.splice(0, data.indexOf("Purchase"));

  let total = 0;
  let furnitures = [];
  needLines.map((x) => {
    let pattern = />>([a-zA-Z]+)<<(\d+\.?\d*)!(\d+)/g;
    let match = pattern.exec(x);
    if (match) {
      furnitures.push(match[1]);
      total += Number(match[2]) * Number(match[3]);
    }
  });
  console.log("Bought furniture:");
  furnitures.map((x) => {
    console.log(x);
  });
  console.log(`Total money spend: ${total.toFixed(2)}`);
}
