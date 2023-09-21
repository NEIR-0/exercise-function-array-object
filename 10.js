function fill(data, value, start, end) {
  // Insert your code here
  /*
  - PAKE "IF" SEMUA, BUKAN "ELSE IF". AGAR SEMUA CONDISI DI CEK
  - KALO PAKE "ELSE IF" JIKA 1 KONDISI TERPENUHI YANG LAIN GAK DI CEK
  - KALO ENGGAK SOAL TERAKHIR ERROR
  */
  if (data === undefined || value === undefined) {
    return `Invalid input`;
  }

  // buat start
  if (start === undefined) {
    // kasih default buat start
    start = 0; // default kita kasih 0, agar dari awal. gak akan ada effect jika " else if(end === undefined && end > )" ke baca
  }

  // soal 5
  if (end === undefined || end > data.length) {
    end = data.length;
  }

  // ! GAK USAH BIKIN VAR BARU KAYAK LET i = 0
  // cek soal, biasanya semua params ada fungsinya
  while (start < end) {
    // console.log(data[start]);

    // "data[start]" = data[0], sebagai contoh
    data[start] = value;

    // data[0++]
    start++;
  }
  return data;
}

//Test Case
// console.log(fill());
// // Invalid input

// console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"]));
// // Invalid input

// console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4));
// [ 'Alpha', 'Beta', 'Echo', 'Echo' ]

// console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3));
// // [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]

// console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20));
// // [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]

// console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1));
// // [ 'Golf', 'Beta', 'Charlie', 'Delta' ]

// console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1));
// // [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India"));
// [ 'India', 'India', 'India', 'India', 'India', 'India' ]

module.exports = fill;
