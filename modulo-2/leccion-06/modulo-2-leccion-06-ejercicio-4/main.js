'use strict';

const button = document.querySelector('.btn');

function sendText(event) {
  console.log(event);
  console.log(event.type, typeof event.type);
}

button.addEventListener('click', sendText);

// al poner event.type nos dice qué tipo de acción tenemos que hacer para que se ejecute la función. En este caso es al hacer click. Nos dice qué tipo de evento es.
//con el typeof podemos ver que el event.type es un string. El click está entre comillas.
// SI PONEMOS SOLO console.log(event) EN LA CONSOLA NOS APARECEN LOS MÉTODOS Y PROPIEDADES DEL EVENTO.
