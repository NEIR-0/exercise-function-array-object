function ladder(word) {
  //your code here
  let result = [];
  for (let i = 0; i < word.length; i++) {
    let hasil = [];
    let count = 0;
    for (let j = word.length - 1; j >= i; j--) {
      hasil.push(word[count]);
      count += 1;
    }
    // console.log(hasil);
    result.push(hasil);
  }
  return result;
}

// DRIVER CODE
console.log(ladder("hacktiv8"));

// [
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]

module.exports = ladder;
