function convertSymbol(arr) {
  // code here
  // console.log(arr);
  /*
  1.   '!' => 1               6.   '^' => 6
  2.   '@' => 2               7.   '&' => 7
  3.   '#' => 3               8.   '*' => 8
  4.   '$' => 4               9.   '(' => 9
  5.   '%' => 5               10.  ')' => 0
  */

  // pake object, BARU TAU JUGA GW BISA KEK GINI
  let simbol = {
    "!": 1,
    "@": 2,
    "#": 3,
    $: 4,
    "%": 5,
    "^": 6,
    "&": 7,
    "*": 8,
    "(": 9,
    ")": 0,
  };

  let result = [];
  for (let cover of arr) {
    // console.log(data);
    let hasil = "";
    for (let data of cover) {
      // console.log(data);
      // GW BARU TAU BISA KEK GINI ANJIRR!
      // hasil += simbol["!"] / 1
      hasil += simbol[data];
    }
    // console.log(hasil);
    // GANTI NUMBER!!
    result.push(Number(hasil));
  }
  // console.log(result);
  return result;
}

function decrementOdd(arr) {
  // code here
  let panjang = arr.length;
  // console.log(panjang);
  let penampung = [];
  for (let val of arr) {
    if (val % 2 === 1) {
      let hasil = Math.abs(val - panjang);
      penampung.push(hasil);
    } else {
      penampung.push(val);
    }
  }

  // console.log(penampung);
  return penampung;
}

function splitNumber(arr) {
  // code here
  // console.log(arr);
  let result = [];
  let hasil = [];
  for (let angka of arr) {
    if (angka > 26) {
      result.push(hasil);
      hasil = [];
    } else {
      hasil.push(angka);
    }
  }
  // kalo gak ada "undefined", pake ini:
  result.push(hasil);

  // console.log(result);
  return result;
}

function convertNumber(arr) {
  // code here
  // console.log(arr);
  let hasil = "";
  let huruf = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < arr.length; i++) {
    let petArray = arr[i];
    for (let j = 0; j < petArray.length; j++) {
      const perChar = petArray[j];
      hasil += huruf[perChar - 1];
    }
    // tricky!
    //    i=0/arr.length=1, i=1/arr.length=2, i=1/arr.length=3
    // [ [ 12, 5, 20, 19 ], [ 7, 15 ], [ 7, 21, 25, 26 ] ]
    if (i < arr.length - 1) {
      // dikasih "-1" agar diakhir kalimat tidak dikasih "spasi" lagi
      hasil += " ";
    }
  }
  // console.log(hasil);
  return hasil;
}

function result(arr) {
  // code here
  let convert = convertSymbol(arr);
  // console.log(convert);
  let decrement = decrementOdd(convert);
  // console.log(decrement);
  let split = splitNumber(decrement);
  // console.log(split);
  let conNumber = convertNumber(split);
  // console.log(conNumber);

  return conNumber;
}

console.log(
  result(["!@", "!&", "@)", "#!", "&#", "!(", "@&", "%%", "!(", "##", "#&", "@^"]) // lets go guyz
);
console.log(
  result(["!(", "#&", "!@", "@%", "@@", "!%", "&#", "#%", "@%", "#!"]) // i love you
);

console.log(
  result(["!%", "@&", "$", "!&", "$#", "*", "!#", "!%", "@#", "@)", "@!", "@@"]) // code hacktiv
);

module.exports = {
  convertSymbol,
  decrementOdd,
  splitNumber,
  convertNumber,
  result,
};
