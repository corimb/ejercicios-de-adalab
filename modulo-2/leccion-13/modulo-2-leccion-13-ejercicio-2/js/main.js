'use strict';
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

//ARROW FUNCTION:
// al array le pasamos el método map que se aplica en cada nombre y le suma el string Bienvenida.
const sayHi = names.map((name) => 'Bienvenida ' + name);
console.log(sayHi);
