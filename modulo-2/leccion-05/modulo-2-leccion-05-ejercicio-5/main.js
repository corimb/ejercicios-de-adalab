'use strict';

const body = document.querySelector('body');

// FUNCIÓN ANÓNIMA

document.addEventListener('keydown', function (event) {
  if (event.key === 'r') {
    body.classList.add('red');
    body.classList.remove('green');
  } else if (event.key === 'm') {
    body.classList.add('green');
    body.classList.remove('red');
  }
});

// línea 7: el documento escucha si pulsamos alguna tecla y si eso pasa entra a ejecutar la función (event)
// con event.key especificamos qué letra hay que pulsar para que se ejecuten las siguientes líneas.
// hay que poner else if / con else simplemente, no funciona.
