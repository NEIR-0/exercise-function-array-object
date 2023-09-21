/*
Buatlah sebuah function reverseArr yang menerima 1 input arr (array). Funtion ini akan menghasilkan sebuah array baru yang urutannya dibalik dari belakang ke depan

contoh:
input:
- arr: [1, 2, 3, 4, 5];

output:
[5, 4, 3, 2, 1]
*/

function reverseArr(arr) {
  // tulis kode disini
  //   console.log(arr);
  // let hasil = [];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   // console.log(arr[i]);

  //   hasil.push(arr[i]);
  // }
  // return hasil;

  let hasil = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    hasil.push(arr[i]);
  }

  return hasil;
}

console.log(reverseArr([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArr(["h", "e", "l", "l", "o"])); // ['o', 'l', 'l', 'e', 'h']
