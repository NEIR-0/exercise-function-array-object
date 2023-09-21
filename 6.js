/**
 * =================
 * Box of alphabet
 * =================
 *
 * Terdapat sebuah fungsi yang akan membuat sebuah array multi dimensi dengan jumlah baris dan kolom yang diminta oleh user.
 *
 * Pada setiap elementnya kita akan memasukkan huruf alphabet berurutan dari A hingga Z.
 * Pengisian huruf dimulai dari baris pertama dari kiri ke kanan, ketika baris pertama sudah terisi dengan huruf huruf alfabet,
 * maka pengisian dimulai dari baris kedua paling kiri dan bergerak ke kanan dan seterusnya.
 *
 * Ketika huruf sudah mencapai huruf Z maka element selanjutnya akan diisi oleh huruf A lagi dan seterusnya.
 *
 * Rules:
 * - Hanya boleh menggunakan built in function push()
 *
 */

function boxOfAlphabet(row, col) {
  // 0. bikin "alphabet" dolo
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  // 5. bikin var yang selalu di tambah dalam looping 2
  let count = 0;

  // 7. bikin result akhir
  let result = [];
  // 1. looping row
  for (let i = 0; i < row; i++) {
    // 3. bikin penampung array awal
    let awal = [];

    // 2. looping col
    for (let j = 0; j < col; j++) {
      // 4. test - 1
      // awal.push(alphabet[0]); // ubah [0] jadi dinamis pake count || ["a", "a"] ["a", "a"]

      // 8. mencegah undefined (soal 3), !! "alphabet.length - 1"
      if (count > alphabet.length - 1) {
        count = 0; //mulai dari "A" lagi
      }
      // 9. masukkan 5 & 6
      else {
        // 5. lanjutan
        awal.push(alphabet[count]); // bikin count dinamis || [ 'a', 'b' ] [ 'c', 'd' ]

        // 6. tambah count nya, agar
        count += 1;
      }
    }
    // console.log(awal);
    result.push(awal);
  }

  return result;
}

// boxOfAlphabet(2, 2); //dummy gw

// soal:
console.log(boxOfAlphabet(2, 2));
// /**
//  * [
//  *  ['a', 'b'],
//  *  ['c', 'd']
//  * ]
//  */
/*
[
  ["", ""],
    ["", ""]
]
*/

console.log(boxOfAlphabet(3, 4));

/**
 *  [
 *   ['a', 'b', 'c', 'd'],
 *   ['e', 'f', 'g', 'h'],
 *   ['i', 'j', 'k', 'l'],
 * ]
 */

console.log(boxOfAlphabet(6, 5));

/**
 * [
 *   ['a', 'b', 'c', 'd', 'e'],
 *   ['f', 'g', 'h', 'i', 'j'],
 *   ['k', 'l', 'm', 'n', 'o'],
 *   ['p', 'q', 'r', 's', 't'],
 *   ['u', 'v', 'w', 'x', 'y'],
 *   ['z', 'a', 'b', 'c', 'd']
 * ]
 */
