'use strict';
const marks = [5, 4, 6, 7, 9];

//ARROW FUNCTION:
// al array le pasamos el método map que se aplica en cada nota y le suma 1.
const inflatedMarkc = marks.map((mark) => mark + 1);
console.log(inflatedMarkc);

// ANONYMOUS FUNCTION:
// creamos una función anónima que recoge el parámetro mark y devuelve la nota + 1
// creamos una constante que contendrá el nuevo array.
// le pasamos el método map al array principal y llamamos a la función que hemos creado antes.
const getInflatedMArks = (mark) => mark + 1;
const inflatedMarks = marks.map(getInflatedMArks);
console.log(inflatedMarks);
