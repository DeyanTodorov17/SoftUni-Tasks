function solve(input) {
  let countries = {};

  input.forEach((line) => {
    let tokens = line.split(" > ");

    let currentCountry = tokens[0];
    let destination = tokens[1];
    let cost = Number(tokens[2]);

    if (!countries.hasOwnProperty(currentCountry)) {
      countries[currentCountry] = {};
      countries[currentCountry][destination] = cost;
    } else {
      if (!countries[currentCountry].hasOwnProperty(destination)) {
        countries[currentCountry][destination] = cost;
      } else {
        if (cost < countries[currentCountry][destination]) {
          countries[currentCountry][destination] = cost;
        }
      }
    }
  });
  let arr = Object.entries(countries);
  arr.sort((a, b) => {
    let result = a[0].localeCompare(b[0]);
    return result;
  });

  let final = Object.fromEntries(arr);
  let keys = Object.keys(final);
  for (const key of keys) {
    let secondResult = "";
    let country = key;
    let destinations = final[key];
    let destinationKeys = Object.keys(destinations);

    for (const destkey of destinationKeys) {
      let city = destkey;
      let money = destinations[city];
      secondResult += city + " -> " + money + " ";
    }
    let result = country + " -> " + secondResult;
    console.log(result);
  }
}
