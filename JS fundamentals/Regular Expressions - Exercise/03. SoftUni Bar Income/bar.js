function solve(data) {
  let totalPrice = 0;
  let linesNeed = data.splice(0, data.indexOf("end of shift"));
  linesNeed.map((x) => {
    let pattern = /%([A-Z][a-z]+)%[^\|\$\%\.]*<(\w+)>[^\|\$\%\.]*\|(\d+)\|[^\|\$\%\.\d]*(\d+(\.\d+)?)\$$/;
    let exec = pattern.exec(x);
    if (exec) {
      let price = Number(exec[3]) * Number(exec[4]);
      totalPrice += price;
      console.log(`${exec[1]}: ${exec[2]} - ${price.toFixed(2)}`);
    }
  });
  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
