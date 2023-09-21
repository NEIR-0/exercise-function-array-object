function tentukanDeretGeometri(arr) {
  // write your code here

  // 1. cek geometri, dengan membandingkan index[1] dengan index[0]
  let geometri = arr[1] / arr[0];
  // console.log(`deret geometri ${geometri}`);

  let cek = true;
  for (let i = 1; i < arr.length - 1; i++) {
    // console.log(arr[i]);
    // console.log(arr[i], geometri, arr[i] * geometri, arr[i] * geometri === arr[i + 1]);

    if (arr[i] * geometri !== arr[i + 1]) {
      cek = false;
    }
  }
  // console.log(cek);
  if (cek === true) {
    return true;
  } else {
    return false;
  }
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
tentukanDeretGeometri([2, 4, 6, 8]); // false
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
module.exports = tentukanDeretGeometri;
