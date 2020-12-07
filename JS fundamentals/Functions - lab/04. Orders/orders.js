function solve(prodcut, numOfProducts) {
  let totalProducts = Number(numOfProducts);
  let result = 0;
  let price = 0;

  switch (prodcut) {
    case "water":
      price = 1;
      break;
    case "coffee":
      price = 1.5;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2;
      break;
  }
  result = price * totalProducts;

  return result.toFixed(2);
}
