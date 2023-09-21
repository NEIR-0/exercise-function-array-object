function fill(data, value, start, end) {
  let result;

  if (!data || !value) {
    result = "Invalid input";
  } else {
    // adjustment start
    if (!start) {
      start = 0;
    }

    // adjustment end
    if (!end) {
      end = data.length;
    } else if (end > data.length) {
      end = data.length;
    }

    // proses fill
    // let i = start;
    // while (i < end) {
    //   // typo di sini harusnya "i < end"
    //   data[i] = value;
    //   i++;
    // }

    // ubah menjadi for
    for (let i = start; i < end; i++) {
      data[i] = value;
    }

    // naruh data di result
    result = data;
  }

  return result;
}

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4));
// [ 'Alpha', 'Beta', 'Echo', 'Echo' ]

module.exports = fill;
