function mengelompokkanAngka(arr) {
  // write your code here
  /*
  cara:
  1. cek kelipatan 3 > baris ketiga
  2. cek genap > baris pertama
  3. cek ganjil > baris kedua
  outputnya:
  [ [],[],[], ]
  */

  let arrGenap = [];
  let arrGanjil = [];
  let arrKelipatan3 = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let angka = arr[i];
    if (angka % 3 === 0) {
      // console.log("kelipatan 3");
      arrKelipatan3.push(angka);
    }

    // genap
    else if (angka % 2 === 0) {
      // console.log("genap");
      arrGenap.push(angka);
    }
    // ganjil
    else if (angka % 2 === 1) {
      // console.log("ganjil");
      arrGanjil.push(angka);
    }
  }
  // console.log(arrGenap);
  // console.log(arrGanjil);
  // console.log(arrKelipatan3);
  let result = [arrGenap, arrGanjil, arrKelipatan3];
  return result;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

module.exports = mengelompokkanAngka;
