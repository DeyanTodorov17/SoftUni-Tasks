function solution(day, age) {

  function comparing(age, price1, price2, price3) {
    if (0 <= age && age <= 18) {
      return `${price1}$`;
    } else if (18 < age && age <= 64) {
      return `${price2}$`;
    } else if (64 < age && age <= 122) {
      return `${price3}$`;
    }
    return "Error!";
  }

  let binded = comparing.bind(undefined, age);

  let funcs = {
    Weekday: binded(12, 18, 12),
    Weekend: binded(15, 20, 15),
    Holiday: binded(5, 12, 10),
  };
  
  return funcs[day];
}

