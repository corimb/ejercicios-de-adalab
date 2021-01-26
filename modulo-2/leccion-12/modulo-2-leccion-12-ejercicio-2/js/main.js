'use strict';
//1. creamos la constante del elemento select:
const citySelect = document.querySelector('#city-select');
//2. creamos la constante del (padre) elemento que alberga las imágenes:
const containerImage = document.querySelector('.image-container');
//3. creamos la constante del elemento html que queremos introducir debajo del elemento padre (hijo):
const addImage = document.createElement('img');
//4. añadimos el elemento hijo al elelmento padre:
containerImage.appendChild(addImage);

//Creamos una función que relaciones el select con las rutas de las imágenes que queremos que aparezcan cuando clickamos:

//Añadimos el atributo src con la ruta.

function showPicture() {
  if (citySelect.value === 'madrid') {
    addImage.setAttribute('src', './images/madrid.jpeg');
  } else if (citySelect.value === 'parís') {
    addImage.setAttribute('src', './images/paris.jpg');
  } else if (citySelect.value === 'nuevayork') {
    addImage.setAttribute('src', './images/nueva-york.jpg');
  }
}

citySelect.addEventListener('change', showPicture);
