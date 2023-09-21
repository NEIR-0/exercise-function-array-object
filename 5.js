/**
 * ==============================================================
 * 1
 * ==============================================================
 */
//Buatlah Sebuah Fungsi dengan nama averageAndOlest yang menerima 1 parameter berupa array multidimensi. Fungsi ini akan mengembalikan sebuah array multidimensi dengan 2 data
// Data pertama -> Sebuah data dengan tipe number yang berisikan rata2 umur dari semua orang yang ada di dalam array people
// Data kedua -> Sebuah data dengan tipe array yang diambil dari salah satu data di array people yang memiliki umur paling tua

let people = [
  // [name, age, marital status]
  ["Dudu", 20, false],
  ["Dodo", 18, false],
  ["Didi", 25, true],
  ["Dede", 17, false],
  ["Bobo", 40, true],
  ["bibi", 25, false],
  ["bebe", 36, false],
  ["Baba", 28, true],
];
// output:
// [
//     26.125,
//     ['Bobo', 40, true]
// ]

function summary() {}
console.log(summary);

/**
 * ==============================================================
 * 2
 * ==============================================================
 */
let studentsData = [["Agyad-rmt19-prep"], ["Mark-rmt17-p2"], ["Rheina-rmt16-p3"]];

function split(student) {}

console.log(split(["Agyad-rmt19-prep"]));
//output
//  ["Agyad", "rmt19", "prep"]

function arrangeData(students) {
  //akan memanggil split function
}

console.log(arrangeData(studentsData));
//output
// [
//     ["Agyad", "rmt19", "prep"],
//     ["Mark", "rmt17", "p2"],
//     ["Rheina", "rmt16","p3"]
// ]

console.log(arrangeData());
//output
// Invalid input

/**
 * ==============================================================
 * 3
 * ==============================================================
 */
/*
===========================
Tambah penumpang Bus
============================

[INSTRUCTION]
Terdapat function tambahPenumpangBus yang menerima 2 parameter berupa :
: 
1. array multidimensi yang berisi kondisi penumpang bus yang sudah menaiki bus
2. array penumpang bus yang ingin menaiki bus
Fungsi ini akan mengembalikan array multidimensi yang sudah terisi oleh semua penumpang jika jumlah bangku yang kosong dan penumpang yang ingin naik pas / sama. (LIHAT EXAMPLE 1)
Sedangkan fungsi ini akan mengembalikan string berupa list penumpang yang tidak mendapatkan kursi, jika jumlah bangku yang kosong tidak mencukupi (LIHAT EXAMPLE 2)

[EXAMPLES]
input 1 : 
  [
    ['Hary', '', 'Miftah'],
    ['', 'Tony', ''],
    ['Udin', 'Paijo', 'Butet']
  ]
input 2 : ['Budi', 'Soleh', 'Miku']
output :
  [
    ['Hary', 'Budi', 'Miftah'],
    ['Soleh', 'Tony', 'Miku'],
    ['Udin', 'Paijo', 'Butet']
  ]
--------------------------------------------
input 1 : 
  [
    ['Udin', '', ''],
    ['', '', 'Dede'],
    ['Saiful', 'Paijo', 'Butet']
  ]
input 2 : ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong','Layla', 'Grock']
output :
'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'


[Rules]:
- Dilarang menggunakan fungsi map, reduce, filter

*/

function tambahPenumpangBus(arr1, arr2) {
  //YOUR CODE HERE
}

console.log(
  tambahPenumpangBus(
    [
      ["Hary", "", "Miftah"],
      ["", "Tony", ""],
      ["Udin", "Paijo", "Butet"],
    ],
    ["Budi", "Soleh", "Miku"]
  )
);
/*
[
  ['Hary', 'Budi', 'Miftah'],
  ['Soleh', 'Tony', 'Miku'],
  ['Udin', 'Paijo', 'Butet']
]
*/

console.log(
  tambahPenumpangBus(
    [
      ["Udin", "", ""],
      ["", "", "Dede"],
      ["Saiful", "Paijo", "Butet"],
    ],
    ["Alucard", "Balmond", "Eudora", "Nana", "Miya", "Zilong", "Layla", "Grock"]
  )
);
/*
output :
'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
*/
