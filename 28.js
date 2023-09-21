function urutkanAbjad(str) {
  // you can only write your code here!

  // ubah jadi array dulu agar bisa bubble sorting
  let hasil = [];
  for (let i = 0; i < str.length; i++) {
    const perChar = str[i];
    hasil.push(perChar);
  }
  // console.log(hasil);

  // bubble sort rumus
  // for (let i = 0; i < hasil.length - 1; i++) {
  //   for (let j = 0; j < hasil.length - i; j++) {
  //     if (hasil[j] > hasil[j + 1]) {
  //       let temp = hasil[j];
  //       hasil[j] = hasil[j + 1];
  //       hasil[j + 1] = temp;
  //     }
  //   }
  // }

  // cara kak josep
  // cek apakah masih bis sorting
  let sorting = false;
  while (sorting === false) {
    // cek jika terjadi swap
    let swapTerjadi = false;
    for (let i = 0; i < hasil.length; i++) {
      let kiri = hasil[i];
      let kanan = hasil[i + 1];
      if (kiri > kanan) {
        hasil[i] = kanan;
        hasil[i + 1] = kiri;
        swapTerjadi = true;
      }
    }

    // kalo tidak terjadi swap, maka ubah tidak ada sorting lagi (sorting = true;)
    if (swapTerjadi === false) {
      sorting = true;
    }
  }

  // "hasil" sudah tersortir diatas
  let result = "";
  for (let k = 0; k < hasil.length; k++) {
    result += hasil[k];
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'

//do not change the code below
module.exports = urutkanAbjad;
