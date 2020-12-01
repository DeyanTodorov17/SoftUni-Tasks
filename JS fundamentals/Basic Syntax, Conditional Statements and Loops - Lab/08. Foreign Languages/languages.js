function solve(country) {
  let countryLanguages = {
    USA: "English",
    England: "English",
    Spain: "Spanish",
    Argentina: "Spanish",
    Mexico: "Spanish",
  };
  if (countryLanguages.hasOwnProperty(country)) {
    return countryLanguages[country];
  }
  return "unknown";
}
