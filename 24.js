function filterMovie(genres) {
  let movies = [
    ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
    ["Action", "Mad Max", "The Batman", "Josh Wick"],
    ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
    ["Comedy", "Safety Last", "The Trip"],
  ];
  // write your code here
  //   split
  let hasil = [];
  let temp = "";
  for (let i = 0; i <= genres.length; i++) {
    const perChar = genres[i];
    // console.log(perChar);
    if (perChar === ";" || perChar === undefined) {
      hasil.push(temp);
      temp = "";
    } else {
      temp += perChar;
    }
  }
  //   console.log(hasil);

  let result = [];
  for (let key of movies) {
    let kategori = key[0];
    // console.log(kategori);
    for (let j = 0; j < hasil.length; j++) {
      const perItem = hasil[j];
      //   console.log(perItem);
      if (kategori === perItem) {
        result.push(key);
      }
    }
  }
  //   console.log(result);
  return result;
}

function usersCanWatch(users) {
  // write your code here
  if (users === undefined) {
    return "Invalid Data!";
  }

  let menu = users.menu;
  //   console.log(menu);
  let result = filterMovie(menu);
  if (result.length === 0) {
    return "Movie not found";
  }
  return result;
}

// TEST CASE
const user1 = {
  name: "Bari",
  cinema: "XIV",
  menu: "Action;Drama;Comedy",
};
console.log(usersCanWatch(user1));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user2 = {
  name: "Tole",
  cinema: "XIIX",
  menu: "Fantasy;Adventure;Comedy",
};
console.log(usersCanWatch(user2));
/*
[
  ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user3 = {
  name: "Rizky",
  cinema: "Cinepolos",
  menu: "Scifi-Musical",
};
console.log(usersCanWatch(user3));
// "Movie not found"

console.log(usersCanWatch());
// "Invalid Data!"
