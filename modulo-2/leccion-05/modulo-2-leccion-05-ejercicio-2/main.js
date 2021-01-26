'use strict';
//crear una constante del elemento del HTML que vamos a cambiar
const button = document.querySelector('.btn');

// FUNCIÓN ANÓNIMA

button.addEventListener('click', function () {
  const name = document.querySelector('#input').value;
  console.log(`Hola ${name}`);
});

//  FUNCIÓN NOMINAL
// function showInput() {
//   const name = document.querySelector('#input').value;
//   console.log(`Hola ${name}`);
// }

// button.addEventListener('click', showInput);
