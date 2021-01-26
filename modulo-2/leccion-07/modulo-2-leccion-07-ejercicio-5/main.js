'use strict';

const numbers = [4, 6, 9, 3, 1];
numbers[5] = 34;
// let acc = 0;

// for (let i = 0; i < numbers.length; i++) {
//   acc += numbers[i] / numbers.length;
// }

// console.log('The avarage is ' + acc);

// en la condición se añade el tope la longitud del array.
//para calcualr la media tmabién se usa la longitud y así siempre se divide entre el número de valores que tiene el array.
function avarage(numberArray) {
  let acc = 0;
  let size = numberArray.length;
  for (let i = 0; i <= size - 1; i++) {
    acc = acc + numberArray[i];
  }
  let result = acc / size;
  console.log('The avarage is ' + result);
}
avarage(numbers);
