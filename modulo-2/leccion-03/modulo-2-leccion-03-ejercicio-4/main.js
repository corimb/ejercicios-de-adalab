'use strict';

const dogAge = 4;

let human = 15;
if (dogAge === 2) {
  human += 9;
} else if (dogAge >= 3) {
  human += 9;
  human += (dogAge - 2) * 5;
}

if (dogAge < 1) {
  console.log('No se contabilizan los meses inferiores a 1 año');
} else {
  console.log(dogAge + ' año(s) perrunos son ' + human + ' años humanos.');
}
