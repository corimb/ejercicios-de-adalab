'use strict';

function get100Numbers() {
  let arr = [];
  for (let index = 0; index < 100; index++) {
    arr.push(index + 1);
  }
  // return arr;
}
get100Numbers();
console.log(get100Numbers());
//con el arr.push(index+1) estamos añadiendo al array que tenemos en cada momento que se ejecuta +1.
// si por ejemplo en la tercera vuelta tengo [1, 2, 3] justo cuando termina se añade el 4.

//vamos a coger el valor de la función anterior y le vamos a cambiar el orden. Para eso tenemos que guardar el resultado en una constante, por lo que necesitamos un return.

function getReverdes100Numbers() {
  let reversedNumbers = get100Numbers().reverse();
  console.log(reversedNumbers);
  return reversedNumbers;
}

getReverdes100Numbers();
// si quitamos el return de la primera función, getReversed100Numbers no puede leer la función anterior. Por lo tanto el reverse no funciona.
