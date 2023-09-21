// 1. split
let kalimat = [
  ["ijlal-23", "kuukoi-90"],
  ["koko-31", "coco-29"],
  ["nico-33", "oppa-34"],
];

function split(array) {
  // console.log(array);
  let muda = [];
  let tua = [];
  for (let i = 0; i < array.length; i++) {
    const perArray = array[i];
    // console.log(perArray);
    for (let j = 0; j < perArray.length; j++) {
      const perItem = perArray[j];
      // console.log(perItem);
      let hasil = [];
      let temp = "";
      for (let k = 0; k <= perItem.length; k++) {
        const perChar = perItem[k];
        // console.log(perChar);
        if (perChar === "-" || perChar === undefined) {
          hasil.push(temp);
          temp = "";
        } else {
          temp += perChar;
        }
      }
      // console.log(hasil[0]);
      let nama = hasil[0];
      let age = hasil[1];
      if (age >= 23 && age <= 29) {
        muda.push(nama);
      } else {
        tua.push(nama);
      }
    }
  }
  // console.log(muda);
  // console.log(tua);
  return [muda, tua];
}
console.log(split(kalimat));
// output: muda - tua
// [ [ 'ijlal', 'coco' ], [ 'kuukoi', 'koko', 'nico', 'oppa' ] ]

// 2. min dan max
let angka = [2, 1, 4, 6, 9, 22];
function minMax(arr) {
  // console.log(arr);
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const perChar = arr[i];
    // console.log(perChar);
    if (min > perChar) {
      min = perChar;
    }
    if (max < perChar) {
      max = perChar;
    }
  }
  // console.log(min, max);
  return [min, max];
}
console.log(minMax(angka));
// output:
// [1, 2]

// bubble sorting
let nama = ["budi", "andi", "hilmi", "caca"];
let angka2 = [90, 88, 22.11, 4, 8, 7, 18, 22, 317];

function BubbleSorting(param) {
  // console.log(param);
  let sorting = false;
  while (sorting === false) {
    let swap = false;
    for (let i = 0; i < param.length - 1; i++) {
      let kiri = param[i];
      let kanan = param[i + 1];
      if (kiri > kanan) {
        param[i] = kanan;
        param[i + 1] = kiri;
        swap = true;
      }
    }

    if (swap === false) {
      sorting = true;
    }
  }

  // console.log(param);
  return param;
}

function utama(arr) {
  // console.log(arr);
  let sort = BubbleSorting(arr);
  return sort;
}

console.log(utama(angka2));
// [4, 7, 8, 18, 22, 22.11, 88, 90, 317];
console.log(utama(nama));
// [ 'andi', 'budi', 'caca', 'hilmi' ]
