function changeMe(arr) {
  // write your code here
  if (arr.length === 0) {
    return "";
  }

  for (let i = 0; i < arr.length; i++) {
    const perChar = arr[i];
    // console.log(perChar);
    let namaDepan = perChar[0];
    let namaBelakang = perChar[1];
    let gender = perChar[2];
    let age = perChar[3];
    // console.log(namaDepan, namaBelakang, gender, age);

    if (age === undefined) {
      age = "Invalid Birth Year";
    } else {
      age = 2023 - age;
    }

    // BARU TAU GW BISA KEK GINI!!!
    let result = { firstName: namaDepan, lastName: namaBelakang, gender: gender, age: age };
    let title = `${i + 1}. ${namaDepan} ${namaBelakang}:`;
    console.log(title, result);
  }
}
// ==========================================
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// ==========================================
changeMe([]); // ""

module.exports = changeMe;
