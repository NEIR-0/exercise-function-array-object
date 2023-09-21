/*
Buatlah sebuah function highestLowest untuk mendapatkan angka terbesar dan terkecil dari sebuah array multidimensi
*/

function highestLowest(arr) {
  // tulis kode disini
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const perAray = arr[i];
    for (let j = 0; j < perAray.length; j++) {
      const perItem = perAray[j];
      for (let k = 0; k < perItem.length; k++) {
        const perChar = perItem[k];
        // console.log(perChar);
        if (min > perChar) {
          min = perChar;
        }
        if (max < perChar) {
          max = perChar;
        }
      }
    }
  }
  return [min, max];
}

let data = [
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3],
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90],
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10],
  ],
];

console.log(highestLowest(data)); // [1, 90] => 1 yang terkecil dan 90 yang terbesar
