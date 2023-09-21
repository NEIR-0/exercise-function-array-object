function sittingArrangement(person, column) {
  // Your code here
  if (column === 0) {
    return `Invalid number`;
  }
  if (column === person.length) {
    return [person];
  }

  let result = [];
  let count = 0;
  for (let i = 0; i <= column; i++) {
    let hasil = [];
    // kak salwa logic
    // if (result.length === Math.ceil(person.length / column)) {
    //   break;
    // }

    // !! TRICKY HERE!!. SOAL 4
    if (result.length === person.length / column) {
      break;
    }

    for (let j = 0; j < column; j++) {
      if (person[count] === undefined) {
        person[count] = "Kursi Kosong";
      }
      hasil.push(person[count]);
      count += 1;
    }
    // console.log(hasil);
    result.push(hasil);
  }
  return result;
}

//DRIVER CODE

console.log(sittingArrangement(["A", "B", "C"], 0)); //Invalid number

console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]

console.log(sittingArrangement(["Yosia", "Asrawi", "Andru"], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]

console.log(sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4));
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]

module.exports = sittingArrangement;
