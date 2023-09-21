// NORMAL WAY & CREATIVE WAY
// function splitting(str) {
//   // you can only write your code here!
//   //   console.log(str);

//   let result = [];
//   let hasil = "";
//   //   pake "<=" jangan lupa untuk splitting
//   for (let i = 0; i <= str.length; i++) {
//     const perChar = str[i];
//     // console.log(perChar);
//     if (perChar === "," || perChar === undefined) {
//       result.push(hasil);
//       hasil = "";
//     } else {
//       hasil += perChar;
//     }
//   }

//   return result;
// }

// CREATIVE WAY
function cekRole(arr) {
  //   console.log(arr);
  let result = [];
  let hasil = "";
  for (let i = 0; i < arr.length; i++) {
    const rak = arr[i];
    // console.log(rak);
    for (let j = 0; j < rak.length; j++) {
      const isiRak = rak[j];
      //   console.log(isiRak);
      if (isiRak === "-") {
        result.push(hasil);
        hasil = "";
        break;
      } else {
        hasil += isiRak;
      }
    }
  }
  //   console.log(result);
  return result;
}

// NORMAL WAY
function splitStrip(arr) {
  // return arr;
  let result = [];
  let hasil = "";
  for (let i = 0; i <= arr.length; i++) {
    const perChar = arr[i];
    // console.log(perChar);
    if (perChar === "-" || perChar === undefined) {
      result.push(hasil);
      hasil = "";
    } else {
      hasil += perChar;
    }
  }
  return result;
}

// SUCCES NPM  TEST
function splitting(str, pemisah) {
  // you can only write your code here!
  // console.log(str);

  let result = [];
  let hasil = "";
  for (let i = 0; i <= str.length; i++) {
    const perChar = str[i];
    // console.log(perChar);
    if (perChar === pemisah || perChar === undefined) {
      result.push(hasil);
      hasil = "";
    } else {
      hasil += perChar;
    }
  }

  return result;
}

function meleeRangedGrouping(str) {
  // you can only write your code here!
  if (str.length === 0) {
    return [];
  }

  // SUCCES NPM  TEST
  let ranged = [];
  let melee = [];
  let pemisahKoma = splitting(str, ",");
  // console.log(pemisahKoma);
  for (let i = 0; i < pemisahKoma.length; i++) {
    const perItem = pemisahKoma[i];
    // console.log(perItem[1]);
    let hasil = splitting(perItem, "-");
    // console.log(hasil);
    let namaHero = hasil[0];
    let namaRole = hasil[1];
    if (namaRole === "Ranged") {
      ranged.push(namaHero);
    }
    if (namaRole === "Melee") {
      melee.push(namaHero);
    }
  }
  // console.log(ranged);
  // console.log(melee);
  return [ranged, melee];

  // let pemisah = splitting(str);
  // console.log(pemisah);
  // let ranged = [];
  // let melee = [];
  // for (let i = 0; i < pemisah.length; i++) {
  //   const rak = pemisah[i];
  //   // console.log(rak);

  //   // NORMAL WAY
  //   // let hasilSplit2 = splitStrip(rak);
  //   // // console.log(hasilSplit2);
  //   // let nameHero = hasilSplit2[0];
  //   // let nameRole = hasilSplit2[1];
  //   // // console.log(nameHero, nameRole);
  //   // if (nameRole === "Ranged") {
  //   //   ranged.push(nameHero);
  //   // } else if (nameRole === "Melee") {
  //   //   melee.push(nameHero);
  //   // }

  //   // CREATIVE WAY
  //   // console.log(rak[rak.length - 1]);
  //   // if (rak[rak.length - 1] === "d") {
  //   //   ranged.push(rak);
  //   // } else if (rak[rak.length - 1] === "e") {
  //   //   melee.push(rak);
  //   // }
  // }
  // // NORMAL WAY
  // // console.log(ranged);
  // // console.log(melee);
  // // return [ranged, melee];

  // // CREATIVE WAY
  // // let namaMelee = cekRole(melee);
  // // let namaRanged = cekRole(ranged);
  // // return [namaRanged, namaMelee];
}

// TEST CASE
let input1 = "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged";
let input2 = "Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged";
console.log(meleeRangedGrouping(input1)); // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping(input2)); // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping("")); // []

//do not change the code below
module.exports = { splitting, meleeRangedGrouping };
