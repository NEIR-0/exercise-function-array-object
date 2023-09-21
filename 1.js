const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari ke-3 angka diatas dan sesuaikan kebutuhan parameternya
function getMax(a, b, c) {
  let hasil = 0;

  if (a >= b) {
    if (a > c) {
      //   console.log(a);
      hasil = a;
    } else {
      //   console.log(c);
      hasil = c;
    }
  }
  // cek number 2 > number 1
  else if (b >= a) {
    if (b > c) {
      //   console.log(b);
      hasil = b;
    } else {
      //   console.log(c);
      hasil = c;
    }
  }
  // cek number 3 > number 1
  else if (c >= a) {
    if (c > b) {
      if (c > b) {
        // console.log(c);
        hasil = c;
      } else {
        // console.log(b);
        hasil = b;
      }
    }
  }

  return hasil;
}

// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 189

// getMax(number1, number2, number3);
let hasil = getMax(number1, number2, number3);
console.log(`Nilai maksimum adalah ${hasil}`);
