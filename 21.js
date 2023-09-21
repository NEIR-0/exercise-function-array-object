/*
Buatlah sebuah function deepSum yang menerima 1 parameter arr (array multidimensi), function akan mengembalikan sebuah number yang merupakan hasil penjumlahan semua angka yang terdapat di array
*/

function summury(data) {
  let hasil = 0;
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    let rak = data[i];
    for (let j = 0; j < rak.length; j++) {
      const isirak = rak[j];
      // console.log(isirak);
      for (let k = 0; k < isirak.length; k++) {
        const isiData = isirak[k];
        // console.log(isiData);
        hasil += isiData;
      }
    }
  }
  return hasil;
}

function deepSum(arr) {
  // tulis kode disini
  // let hasil = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   // console.log(arr[i]);
  //   let rak = arr[i];
  //   for (let j = 0; j < rak.length; j++) {
  //     const isirak = rak[j];
  //     // console.log(isirak);
  //     for (let k = 0; k < isirak.length; k++) {
  //       const isiData = isirak[k];
  //       // console.log(isiData);
  //       hasil += isiData;
  //     }
  //   }
  // }
  // return hasil;

  let sum = summury(arr);
  return sum;
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

console.log(deepSum(data)); // 316
