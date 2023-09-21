function getPoints(history) {
  let itemPoint = {
    Moonlight: 120,
    Goldqueen: 550,
    "Beras Parist": 1200,
    "Minyak Fatma": 2500,
  };
  // write your code here
  let obj = {};
  for (let key of history) {
    // console.log(key);
    if (obj[key] === undefined) {
      obj[key] = 0;
    }
    obj[key] += 1;
  }
  //   console.log(obj);

  let TotalPoint = 0;
  for (let val of history) {
    let point = itemPoint[val];
    // console.log(val, point);
    TotalPoint += point;
  }

  return [TotalPoint, obj];
}

function getPrizes(point) {
  let listPrize = [
    [2000, "Voucher 10k", "Sticker", "Penggaris"],
    [5000, "Voucher 25k", "Kinderboy", "Tissue", "Piring"],
    [10000, "Payung", "Panci"],
  ];
  // write your code here
  //   console.log(point);
  let hasil = point;
  let prize = [];
  for (let i = 0; i < listPrize.length; i++) {
    const perArray = listPrize[i];
    let angka = perArray[0];
    for (let j = 1; j < perArray.length; j++) {
      const hadiah = perArray[j];
      //   console.log(hadiah);
      if (hasil > angka) {
        prize.push(hadiah);
        hasil -= angka;
      }
    }
  }
  //   console.log(prize);
  return prize;
}

function betamart(pembeli) {
  // write your code here
  if (pembeli === undefined) {
    return "Tidak ada pembeli yang belanja";
  }

  let nama = pembeli.name;
  let report = pembeli.histories;
  //   ====================================
  let data = getPoints(report);
  let point = data[0];
  let histori = data[1];
  //   ====================================
  let prize = getPrizes(point);

  return {
    name: nama,
    belanjaanReport: histori,
    prizes: prize,
  };
}

console.log(
  betamart({
    name: "Ilham",
    histories: [
      "Moonlight",
      "Goldqueen",
      "Beras Parist",
      "Moonlight",
      "Goldqueen",
      "Beras Parist",
      "Minyak Fatma",
      "Minyak Fatma",
      "Minyak Fatma",
      "Moonlight",
      "Goldqueen",
      "Goldqueen",
      "Moonlight",
      "Beras Parist",
      "Beras Parist",
      "Minyak Fatma",
      "Minyak Fatma",
      "Moonlight",
      "Moonlight",
    ],
  })
);

/*
{
  name: 'Ilham',
  belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
  prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/

console.log(
  betamart({
    name: "Kosasih",
    histories: [
      "Moonlight",
      "Moonlight",
      "Goldqueen",
      "Moonlight",
      "Minyak Fatma",
      "Goldqueen",
      "Beras Parist",
      "Beras Parist",
      "Beras Parist",
      "Moonlight",
      "Minyak Fatma",
      "Minyak Fatma",
      "Moonlight",
      "Goldqueen",
      "Goldqueen",
      "Goldqueen",
      "Beras Parist",
      "Moonlight",
      "Moonlight",
      "Beras Parist",
      "Beras Parist",
      "Minyak Fatma",
      "Minyak Fatma",
      "Goldqueen",
      "Goldqueen",
      "Moonlight",
      "Moonlight",
      "Moonlight",
      "Moonlight",
    ],
  })
);

/*
{
  name: 'Kosasih',
  belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
  prizes: [
    'Voucher 10k',
    'Sticker',
    'Penggaris',
    'Voucher 25k',
    'Kinderboy',
    'Tissue'
  ]
}
*/

console.log(betamart());
// Tidak ada pembeli yang belanja
