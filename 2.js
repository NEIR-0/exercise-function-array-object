function ganjilGenap(plat) {
  // your code here
  // point 5, harus cek "plat", default = undefined
  if (plat === undefined) {
    // console.log(`invalid data`)
    return `invalid data`;
  }
  // kalo ada params nya
  else {
    // console.log(`ada parameter`);

    let result = [];
    let hasil = "";
    for (let i = 0; i < plat.length; i++) {
      let perChar = plat[i];
      // console.log(perChar);
      if (perChar === ";") {
        result.push(hasil);
        hasil = "";
      }
      // harus pake "i === param.length - ", Wajib! JANGAN LUPA!!
      // coba lu tambahin "console.log(ganjilGenap("2341;342;"));" ditaro paling bawah dan comment code "else if{}" nya
      // hasilnya akan dapat 2 array, karena pembatasnya ";". Contoh: "2341;342;"    || "2341;342"
      //                                                            ["2341","342"]  || ["2341"] (karena ";" cuman 1)
      else if (i === plat.length - 1) {
        hasil += perChar;
        result.push(hasil);
      }
      // selain itu
      else {
        hasil += perChar;
      }
    }
    // console.log(result);
    // console.log(result.length);

    // point ke 4, gak bisa pake flashy karena:
    // let array = [];
    // console.log(Boolean(array)); // true, jadi bukan flashy

    // point ke 4, jadi harus pake result.length
    if (result.length === 0) {
      // console.log(`plat tidak ditemukan`);
      return `plat tidak ditemukan`;
    } else {
      let jumGenap = 0;
      let jumGenjil = 0;
      for (let k = 0; k < result.length; k++) {
        // console.log(result[k]);
        // jadiin number
        let perCharNum = Number(result[k]);
        if (perCharNum % 2 === 0) {
          jumGenap += 1;
        } else {
          jumGenjil += 1;
        }
      }
      // console.log(`jumlah Genap = ${jumGenap}`);
      // console.log(`jumlah Ganjil = ${jumGenjil}`);

      if (jumGenap > 0 && jumGenjil > 0) {
        // console.log(`plat genap sebanyak ${jumGenap} dan plat ganjil sebanyak ${jumGenjil}`);
        return `plat genap sebanyak ${jumGenap} dan plat ganjil sebanyak ${jumGenjil}`;
      }
      // cuman ganjil
      else if (jumGenjil > 0 && jumGenap === 0) {
        // console.log(`plat ganjil sebanyak ${jumGenjil} dan plat genap tidak ditemukan`);
        return `plat ganjil sebanyak ${jumGenjil} dan plat genap tidak ditemukan`;
      }
      // cuman genap
      else if (jumGenap > 0 && jumGenjil === 0) {
        // console.log(`plat genap sebanyak ${jumGenap} dan plat ganjil tidak ditemukan`);
        return `plat genap sebanyak ${jumGenap} dan plat ganjil tidak ditemukan`;
      }
    }
  }
}

console.log(ganjilGenap("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap("")); //plat tidak ditemukan
console.log(ganjilGenap()); //invalid data

//do not change the code below
module.exports = {
  ganjilGenap,
};
