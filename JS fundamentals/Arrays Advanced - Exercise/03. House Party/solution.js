function solve(input) {
  let list = {};
  let functions = {
    "is not going!": function isNotGoing(list, name) {
      if (list.hasOwnProperty(name)) {
        delete list[name];
      } else {
        console.log(`${name} is not in the list!`);
      }
      return list;
    },
    "is going!": function going(list, name) {
      if (!list.hasOwnProperty(name)) {
        list[name] = {};
      } else {
        console.log(`${name} is already in the list!`);
      }
      return list;
    },
  };
  input.map((line) => {
    let tokens = line.split(" ");
    let name = tokens.shift();
    let command = tokens.join(" ");
    list = functions[command](list, name);
  });

  return Object.keys(list).join("\n");
}
