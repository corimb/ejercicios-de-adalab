'use strict';

function get100Numbers() {
  let arr = [];
  for (let index = 0; index < 100; index++) {
    arr.push(index + 1);
    console.log(arr);
  }
}
get100Numbers();

//con el arr.push(index+1) estamos añadiendo al array que tenemos en cada momento que se ejecuta +1.
// si por ejemplo en la tercera vuelta tengo [1, 2, 3] justo cuando termina se añade el 4.
