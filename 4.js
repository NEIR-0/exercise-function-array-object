/*

input
["Kosasih-36", "Dodi-35.5", "Amel-37", "Rudi-37.6"]

process

i   people[i]     splittedPerOrang    splittedPerOrang[0]
0   Kosasih-36    ['Kosasih', '36']   'Kosasih'

      splittedPerOrang[1]            Number(splittedPerOrang[1])
      '36'                           36
1   Dodi-35.5
2   Amel-37
3   Rudi-37.6

output
['Amel', 'Rudi']

*/

/* 
  Function whoIsCovid akan mengembalikan siapa saja orang-orang yang terindikasi covid berdasarkan suhu tubuhnya, yakni jika suhu tubuh di atas 36
*/
function whoIsCovid(data) {
  let result = [];

  for(let i = 0; i < data.length; i++) {
    let perOrang = data[i]; // Kosasih-36, dst

    let perOrangSplitted = [];
    let tmp = '';
    for(let j = 0; j < perOrang.length; j++) {
      let perHuruf = perOrang[j]; // K, o, s, dst
      if(perHuruf === '-') {
        perOrangSplitted.push(tmp);
        tmp = '';
      }
      else if(j === perOrang.length - 1) {
        tmp += perHuruf;
        perOrangSplitted.push(tmp);
      }
      else {
        tmp += perHuruf;
      }
    }

    let perOrangNama = perOrangSplitted[0]; // Kosasih
    let perOrangSuhuStr = perOrangSplitted[1]; // '36'
    let perOrangSuhu = Number(perOrangSuhuStr); // 36

    if(perOrangSuhu > 36) {
      result.push(perOrangNama);
    }

    // console.log(perOrang, perOrangSplitted, result);
  }

  return result;
}

let people = ["Kosasih-36", "Dodi-35.5", "Amel-37", "Rudi-37.6"];
console.log(whoIsCovid(people));
/*
output
[
  Amel,
  Rudi
]
*/
