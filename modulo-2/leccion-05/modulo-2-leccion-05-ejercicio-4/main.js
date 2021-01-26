'use strict';

//crear una constante para el elemento que vamos a cambiar en el HTML
const container = document.querySelector('.color');

// FUNCIÓN ANÓNIMA

window.addEventListener('scroll', function () {
  let scrollValue = window.scrollY;
  if (scrollValue > 250) {
    container.classList.add('blue');
    container.classList.remove('yellow');
  } else {
    container.classList.add('yellow');
    container.classList.remove('blue');
  }
});

//en la variable scrollValue el windows.scrollY nos devuelve siempe un número cada vez que nos movemos por la pantalla.
