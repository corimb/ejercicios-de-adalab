'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];
// crear una función bestLostNumber que devuelva los números del array de la siguiente manera:

function bestLostNumber() {
  let evenNumbersArr = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      evenNumbersArr.push(lostNumbers[i]);
    }
  }
  let threeNumbers = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      threeNumbers.push(lostNumbers[i]);
    }
  }
  const result = evenNumbersArr.concat(threeNumbers);
  console.log(result);
}
bestLostNumber();
