function solve(input) {
  let list = [];

  function adding(tokens, arr) {
    let name = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2]
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");
    let currentObj = {};
    currentObj["name"] = name;
    currentObj["level"] = level;
    currentObj["items"] = items;
    list.push(currentObj);
    return arr;
  }

  input.map((line) => {
    let tokens = line.split(" / ");
    if (tokens.length === 3) {
      list = adding(tokens, list);
    }
  });

  function sorting(arr) {
    arr.sort((a, b) => {
      return a.level - b.level;
    });
    return arr;
  }
  let sortedList = sorting(list);
  sortedList.map((x) => {
    console.log(`Hero: ${x.name}`);
    console.log(`level => ${x.level}`);
    console.log(`items => ${x.items}`);
  });
}
