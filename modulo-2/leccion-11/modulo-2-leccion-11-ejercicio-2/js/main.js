'use strict';

const button = document.querySelector('.js-btn');
const searchInput = document.querySelector('.js-input');
const resultsDiv = document.querySelector('.js-results');

function getData(ev) {
  ev.preventDefault();
  const searchValue = searchInput.value;
  // Generamos petición HTTP (GET)
  fetch('https://swapi.dev/api/people/?search=' + searchValue)
    .then((response) => {
      // response = objeto respuesta HTTP (incluye el status [codigos 2xx, 3xx, 5xx...], el contenido de la respuesta, etc.)
      // usamos la función json para recoger el contenido y la devolvemos como promesa
      return response.json();
    })
    .then((jsonResponse) => {
      // results es el parámetro del objeto json que contiene los resultados (se ve en Network, preview-results)
      console.log(jsonResponse.results);
      printResults(jsonResponse.results);
    })
    .catch((error) => console.log(error));
}

function printResults(searchResults) {
  // vaciamos el resultDiv cada vez que buscamos algo para que no lo añada después del resultado anterior
  resultsDiv.innerHTML = '';
  for (let index = 0; index < searchResults.length; index++) {
    const element = searchResults[index];
    resultsDiv.innerHTML += `<div class="line-break">
    Name: ${element.name} Gender: ${element.gender}
 </div>`;
  }
}

button.addEventListener('click', getData);
// con el preventDefault impedimos que se haga el submit del formulario, puesto que el botón cumple esa función.
