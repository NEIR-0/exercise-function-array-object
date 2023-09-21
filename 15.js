function split(string) {
  // console.log(string);
  let result = [];
  let hasil = "";
  // pake "j <= string.length" untuk mendapatkan "undeinifed". Untuk conditional
  for (let j = 0; j <= string.length; j++) {
    let isiRak = string[j];
    // console.log(isiRak);
    if (isiRak === "-" || isiRak === undefined) {
      result.push(hasil);
      hasil = "";
    } else {
      hasil += isiRak;
    }
  }

  return result;
}

function PeriksaValue(valuasi) {
  if (valuasi > 14) {
    return true;
  }

  return false;
}

function periksaKategori(kode) {
  switch (kode) {
    // E: Ecommerce
    // T: Technology
    // H: Healthcare
    // A: Agrotech
    case "E":
      return "Ecommerce";
    case "T":
      return "Technology";
    case "H":
      return "Healthcare";
    case "A":
      return "Agrotech";
  }
}

function startUpCompetition(startUpList) {
  // Write your code here
  if (startUpList === undefined || startUpList.length === 0) {
    return "Invalid Data";
  }
  // selain itu
  let result = [];
  for (let i = 0; i < startUpList.length; i++) {
    // console.log(startUpList[i]);
    let rak = startUpList[i];
    let pemisah = split(rak);

    // kategori
    let perusahaan = pemisah[0];
    let value = Number(pemisah[1]);
    let kategori = pemisah[2];

    let cekValue = PeriksaValue(value);
    // console.log(cekValue);

    let cekKategori = periksaKategori(kategori);
    // console.log(cekKategori);

    if (cekValue === true) {
      // ini lu bloon!
      // result.push([perusahaan], [value], [kategori]);

      // yang dimau
      result.push([perusahaan, value, cekKategori]);
    }
  }
  return result;
}

console.log(startUpCompetition());
// 'Invalid Data'

console.log(startUpCompetition([]));
// Invalid Data

let indonesia = ["Tikipidia-17-E", "Bikilipik-08-E", "Bhinniki-07-E", "BleBle.cim-15-E", "Triviliki-16-T", "Tikit.cim-12-T", "Hilidic-15-H", "Siyirbix-17-A", "TikingSiyir.ci-16-A"];

console.log(startUpCompetition(indonesia));
// [
//   [ 'Tikipidia', 17, 'Ecommerce' ],
//   [ 'BleBle.cim', 15, 'Ecommerce' ],
//   [ 'Triviliki', 16, 'Technology' ],
//   [ 'Hilidic', 15, 'Healthcare' ],
//   [ 'Siyirbix', 17, 'Agrotech' ],
//   [ 'TikingSiyir.ci', 16, 'Agrotech' ]
// ]

// ===================================================================================================
let singapore = ["Shipee-18-E", "Lizidi-19-E", "HalalTrip-07-T", "verylocaltrip.com-12-T", "Doctor Anywhere-14-H", "Healint-13-H", "SINGROW-19-A", "Simplyfresh-09-A", "eFeedLink-18-A"];
console.log(startUpCompetition(singapore));
// [
//   [ 'Shipee', 18, 'Ecommerce' ],
//   [ 'Lizidi', 19, 'Ecommerce' ],
//   [ 'Doctor Anywhere', 14, 'Healthcare' ],
//   [ 'SINGROW', 19, 'Agrotech' ],
//   [ 'eFeedLink', 18, 'Agrotech' ],
// ]

let malaysia = ["Dropee-17-E", "BookDoc-18-H", "dahmakan-19-A"];
console.log(startUpCompetition(malaysia));
// [
//   [ 'Dropee', 17, 'Ecommerce' ],
//   [ 'BookDoc', 18, 'Healthcare' ],
//   [ 'dahmakan', 19, 'Agrotech' ],
// ]

module.exports = startUpCompetition;
