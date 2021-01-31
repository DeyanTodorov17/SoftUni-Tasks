function solve(data) {
  let cards = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let colors = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let people = data.reduce((a, b) => {
    let [name, cards] = b.split(": ");
    if (!a.hasOwnProperty(name)) {
      a[name] = [];
    }
    cards.split(", ").map((x) => {
      a[name].push(x);
    });
    return a;
  }, {});

  people = Object.entries(people)
    .map((x) => {
      let setCards = new Set(x[1]);
      x[1] = Array.from(setCards);
      return x;
    })
    .reduce((a, b) => {
      let currentPoints = b[1].reduce((a, b) => {
        let tokens = b.split("");
        let color = tokens.pop();
        let card = tokens.join("");
        return (a += cards[card] * colors[color]);
      }, 0);
      a[b[0]] = currentPoints;
      return a;
    }, {});
  Object.keys(people).map((x) => {
    console.log(`${x}: ${people[x]}`);
  });
}
