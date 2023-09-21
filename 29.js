function sorting(array) {
  // your code here
  // console.log(array);

  let sorting = false;
  // kondisi jangan lupa! "sorting === false"
  while (sorting === false) {
    let swapTerjadi = false;
    for (let i = 0; i < array.length; i++) {
      let kiri = array[i];
      let kanan = array[i + 1];
      if (kiri > kanan) {
        array[i] = kanan;
        array[i + 1] = kiri;
        swapTerjadi = true;
      }
    }

    if (swapTerjadi === false) {
      sorting = true;
    }
  }
  return array;
}

function sortingByType(array) {
  // your code here
  // cek array kosong soal 4
  if (array.length === 0) {
    return [];
  }

  let angka = [];
  let string = [];
  let bolean = [];
  for (let i = 0; i < array.length; i++) {
    const perItem = array[i];
    // console.log(perItem);
    if (typeof perItem === "string") {
      string.push(perItem);
    } else if (typeof perItem === "number") {
      angka.push(perItem);
    } else if (typeof perItem === "boolean") {
      bolean.push(perItem);
    }
  }
  // console.log(angka);
  // console.log(string);
  // console.log(bolean);

  let hasilAngka = sorting(angka);
  let hasilString = sorting(string);
  let hasilBoolean = sorting(bolean);

  // console.log(hasilAngka, hasilString, hasilBoolean);
  return [hasilAngka, hasilString, hasilBoolean];
}

function sortAllClean(array) {
  //your code here
  // console.log(array);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const perItem = array[i];
    // filter undefined
    if (perItem === undefined) {
      // skip
      continue;
    }

    // filter "isNaN", kalo number true
    if (isNaN(perItem) && typeof perItem === "number") {
      // skip
      continue;
    }

    if (typeof perItem === "string" || typeof perItem === "number" || typeof perItem === "boolean") {
      result.push(perItem);
    }
  }
  // console.log(result);
  let hasil = sortingByType(result);
  return hasil;
}

//do not change the code below
let inputArrSorting = [2, 4, 6, 8, 2, 3];
let inputArrSortingType = [1, 3, "array", -45, true, false, "big"];
let inputArrSortingClean = [undefined, null, 456, "def", NaN, [], true, 123, "bcd", false];
console.log(sorting(inputArrSorting)); //[ 2, 2, 3, 4, 6, 8 ]
console.log(sortingByType(inputArrSortingType)); // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
console.log(sortAllClean(inputArrSortingClean)); //[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
console.log(sortAllClean([NaN, undefined])); // []

//do not change the code below
module.exports = { sorting, sortingByType, sortAllClean };
