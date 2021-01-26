'use strict';
const input = document.querySelector('#input');
const paragraphElement = document.querySelector('.paragraph');

function getValue() {
  paragraphElement.innerHTML = event.currentTarget.value;
}

input.addEventListener('keyup', getValue);

// Crear una página con un input de texto y un párrafo vacío.
// Cada vez que la usuaria escriba una letra tenemos que recoger
// el valor del input al que le pusimos el listener y escribirlo en el párrafo.
