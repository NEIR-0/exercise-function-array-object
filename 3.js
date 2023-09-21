const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

function filterCar(arrCar, initialChar) {
  let result = [];

  for(let i = 0; i < arrCar.length; i++) {
    let perCar = arrCar[i]; // BMW, Volvo, dst
    let perCarInisial = perCar[0]; // B, V, dst

    let perCarApakahSesuai = false;
    if(perCarInisial === initialChar) {
      perCarApakahSesuai = true;
    }

    if(perCarApakahSesuai === true) {
      result.push(perCar);
    }

    // console.log(i, perCar, perCarInisial, perCarApakahSesuai, result);
  }

  return result;
}

/*
initialChar => 'F'

i     arrCar[i]     arrCar[i][0]    apakahInisialnyaSesuai    result = []

0     BMW           B               false
[]
1     Volvo         V               false
[]
2     Saab          S               false
[]
3     Ford          F               true
['Ford']
4     Fiat          F               true
['Ford', 'Fiat']
5     Audi          A               false
['Ford', 'Fiat']

*/

console.log(filterCar(cars, "F"));
/* 
  [ "Ford", "Fiat" ]
*/

console.log(filterCar(cars, "B"));
