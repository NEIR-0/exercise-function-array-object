function cekPendek(arr) {
  let hasil = "";
  let max = -Infinity;
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      const perItem = arr[i];
      let angka = perItem.length;
      // console.log(max, angka, perItem, hasil);
      if (max < angka) {
        max = angka;
        hasil = perItem;
      }
    }
  }
  // kalo cuman 1
  else {
    hasil += arr;
  }

  // console.log(hasil);
  return hasil;
}

function getAnimals(arr) {
  // Write your code here
  // console.log(arr);
  let karni = [];
  let herbi = [];
  let omni = [];
  for (let i = 0; i < arr.length; i++) {
    const perItem = arr[i];

    let hasil = [];
    let temp = "";
    for (let j = 0; j <= perItem.length; j++) {
      const perChar = perItem[j];
      // console.log(perChar);
      if (perChar === ":" || perChar === undefined) {
        hasil.push(temp);
        temp = "";
      } else {
        temp += perChar;
      }
    }
    // console.log(hasil);
    let nama = hasil[0];
    let kode = hasil[1];

    if (kode === "K") {
      karni.push(nama);
    } else if (kode === "H") {
      herbi.push(nama);
    } else if (kode === "O") {
      omni.push(nama);
    }
  }

  // console.log(karni);
  // console.log(herbi);
  // console.log(omni);

  let finalKarni = cekPendek(karni);
  let finalHerbi = cekPendek(herbi);
  let finalOmni = cekPendek(omni);
  // console.log(finalKarni, finalHerbi, finalOmni);

  return [finalKarni, finalHerbi, finalOmni];
}

//Test Case

console.log(getAnimals(["Singa:K", "Kuda:H", "Monyet:O"]));
// [ 'Singa','Kuda','Monyet' ]

console.log(getAnimals(["Macan:K", "Ayam:O", "Gajah:H", "Monyet:O", "Kerbau:H", "Musang:O", "Burung:H", "Hiu:K"]));
// [ 'Macan', 'Kerbau', 'Monyet' ]

console.log(getAnimals(["Tikus:O", "Merpati:H", "Beruang:O", "Elang:K", "Perkutut:H", "Harimau:K"]));
// [ 'Harimau', 'Perkutut', 'Beruang' ]
