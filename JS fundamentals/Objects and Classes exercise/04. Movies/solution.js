function solve(input) {
  let listMovie = {};

  let functions = {
    addMovie: function add(obj, tokens) {
      let name = tokens.join(" ");
      if (!obj.hasOwnProperty(name)) {
        obj[name] = { name: name };
      }
      return obj;
    },
    directedBy: function director(obj, tokens) {
      let movieName = tokens.splice(0, tokens.indexOf("directedBy")).join(" ");
      let directorName = tokens
        .splice(tokens.indexOf("directedBy") + 1, tokens.length)
        .join(" ");
      if (obj.hasOwnProperty(movieName)) {
        obj[movieName]["director"] = directorName;
      }
      return obj;
    },
    onDate: function date(obj, tokens) {
      let movieName = tokens.splice(0, tokens.indexOf("onDate")).join(" ");
      let movieDate = tokens
        .splice(tokens.indexOf("onDate") + 1, tokens.length)
        .join("");
      if (obj.hasOwnProperty(movieName)) {
        obj[movieName]["date"] = movieDate;
      }
      return obj;
    },
  };
  input.map((line) => {
    let tokens = line.split(" ");

    if (tokens.includes("addMovie")) {
      tokens.shift();
      listMovie = functions["addMovie"](listMovie, tokens);
    } else if (tokens.includes("directedBy")) {
      listMovie = functions["directedBy"](listMovie, tokens);
    } else {
      listMovie = functions["onDate"](listMovie, tokens);
    }
  });
  let keys = Object.keys(listMovie);
  keys.map((key) => {
    if (
      !listMovie[key].hasOwnProperty("director") ||
      !listMovie[key].hasOwnProperty("date")
    ) {
      delete listMovie[key];
    }
  });
  let values = Object.values(listMovie);
  values.map((x) => console.log(JSON.stringify(x)));
}
