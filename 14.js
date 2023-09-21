function find(data, huruf) {
  let count = [];
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    let perChar = data[i];
    if (perChar === huruf) {
      count.push(i);
    }
  }

  return count;
}

function targetTerdekat(arr) {
  // you can only write your code here!
  let find_O = find(arr, "o");
  let find_X = find(arr, "x");
  // console.log(find_O, find_X);

  if (find_X.length === 0 || find_O === 0) {
    return 0;
  }

  // looping find_X lalu kurangi dengan find_O
  let min = Math.abs(find_X[0] - find_O); // 3
  for (let i = 0; i < find_X.length; i++) {
    // let perIndex = find_X[i] - find_O;

    // pake math.abs(), untuk ubah minus ke plus. SOAL 3
    let perIndex = Math.abs(find_X[i] - find_O);
    // console.log(perIndex);
    if (min > perIndex) {
      min = perIndex;
    }
  }
  return min;
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

module.exports = targetTerdekat;
