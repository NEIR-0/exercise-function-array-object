/*
Buatlah sebuah function sumArr yang menerima 1 parameter arr (array). Function ini akan mengeluarkan output jumlah atau kombinasi dari semua data di dalam array

contoh;
input:
- arr : [1, 2, 3, 4, 5]

output: 
15

hasil dari 1 + 2 + 3 + 4 + 5
=========
input:
- arr : ['h', 'e', 'l', 'l', 'o']

output:
'hello'
*/

function sumArr(arr) {
  // ketik code disini
  // console.log(arr);
  // let hasil = 0;
  // //   kondisi diluar looping, cek yang paling depan aj
  // if (typeof arr[0] === "string") {
  //   hasil = "";
  // }
  // for (let i = 0; i < arr.length; i++) {
  //   hasil += arr[i];
  // }
  // return hasil;

  let hasil = 0;

  // index ke 0 aja
  if (typeof arr[0] === "string") {
    hasil = "";
  }

  for (let i = 0; i < arr.length; i++) {
    hasil += arr[i];
  }

  return hasil;
}

console.log(sumArr([1, 2, 3, 4, 5])); // 15
console.log(sumArr(["h", "e", "l", "l", "o"])); // 'hello'
