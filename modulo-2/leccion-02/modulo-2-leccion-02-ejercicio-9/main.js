'use strict';
const element = document.querySelector('h1');
const name = 'Ana Caruntu';
element.innerHTML = `El nombre de mi compañera es 
${name} 
, y está compuesto por ${name.length} caracteres.`;

console.log(
  'El nombre de mi compañera es ' +
    name +
    ', y está compuesto por ' +
    name.length +
    ' caracteres.'
);
