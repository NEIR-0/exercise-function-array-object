function vocalSeeker(board) {
  // Write your code here
  let dictonary = "aiueoAIUEO";
  let count = 0;
  let hasil = "";
  for (let i = 0; i < board.length; i++) {
    // console.log(board[i]);
    let rak = board[i];
    for (let j = 0; j < rak.length; j++) {
      // console.log(rak[j]);
      let isiRak = rak[j];

      // looping dictonary buat cek isiRak
      for (let k = 0; k < dictonary.length; k++) {
        // console.log(dictonary[k]);
        let cek = dictonary[k];
        if (cek === isiRak) {
          count += 1;
          hasil += isiRak;
          break;
        }
      }
    }
  }
  return `vokal ditemukan ${count} dan kumpulan vokal adalah ${hasil}`;
}

//DRIVER CODE

let board = [
  ["*", "*", "*", 10],
  ["*", "*", -5, -10, "*", 100],
  ["a", "A", "o", "b"],
];

console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo

module.exports = vocalSeeker;
