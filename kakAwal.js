let classRoom = [
  ["andika", "ibra", "wennevile", "ardi", "kevin"],
  ["nando", "syifa", "rafly", "dedi", "zaki"],
  ["lio", "lal", "pandu", "wisnu", "rizki"],
];

function getData(data) {
  // code here
  let min = Infinity;
  let max = -Infinity;
  let namaPendek = "";
  let namaPanjang = "";
  for (let key of data) {
    for (let i = 0; i < key.length; i++) {
      const perChar = key[i];
      // console.log(perChar);
      if (min > perChar.length) {
        min = perChar.length;
        namaPendek = perChar;
      }
      if (max < perChar.length) {
        max = perChar.length;
        namaPanjang = perChar;
      }
    }
  }

  return [namaPendek, namaPanjang];
}

console.log(getData(classRoom)); // ["lio", "wennevile"]
// cari nama terpendek dan terpanjang pertama
