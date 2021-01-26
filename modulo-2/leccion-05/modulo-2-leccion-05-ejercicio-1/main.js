'use strict';
debugger;
//crear las dos constantes de los elementos del HTML que vamos a cambiar
const button = document.querySelector('.btn');
const message = document.querySelector('.message');

//crear una constante con el nuevo mensaje que queremos que aparezca en el párrafo
const newMessage = 'Mi primer click, ¡ole yo y la mujer que me parió!';

//añadir la función que se ejecutará sola cuando se haga click sobre el botón

function changeMessage() {
  message.innerHTML = newMessage;
}

//añadir los parámetros de la función de arriba con el eventListener

button.addEventListener('click', changeMessage);

//  SE PUEDE REALIZAR DE OTRA FORMA CON UNA FUNCIÓN ANÓNIMA

//button.addEventListener('click', function () {
//message.innerHTML = newMessage;
//});
