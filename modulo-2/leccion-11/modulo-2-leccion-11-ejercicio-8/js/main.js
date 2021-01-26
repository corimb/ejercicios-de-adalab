'use strict';

const button = document.querySelector('.js-btn');
const searchInput = document.querySelector('.js-input');
const resultsDiv = document.querySelector('.js-results');

function getData() {
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
      saveLocalStorage(jsonResponse.results);
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

button.addEventListener('click', (ev) => {
  ev.preventDefault();
  checkLocalStorage();
});
// con el preventDefault impedimos que se haga el submit del formulario, puesto que el botón cumple esa función.

//comprobamos si el input tiene un valor. Si no lo tiene le asignamos la key empty y guardamos el objeto una vez que se ejecuta getData (results aquí es en realidad el objeto json que nos ha devuelto la función getData). Si tiene valor lo guardamos simplemente.
function saveLocalStorage(results) {
  let searchValue = searchInput.value;
  if (searchValue.length < 1) {
    searchValue = 'empty';
  }
  localStorage.setItem(searchValue, JSON.stringify(results));
}
// Verifica si en localStorage tiene el valor del input (key=valor del input) si es así la printamos y no volvemos a hacer una nueva petición al servidor
// si por el contrario la key no existe ejecutamos la función getData que hace la petición al servidor.
//si el campo está vacío denominamos a la key = empty
function checkLocalStorage() {
  let searchValue = searchInput.value;
  if (searchValue.length < 1) {
    searchValue = 'empty';
  }
  const localStorageResults = localStorage.getItem(searchValue);
  if (localStorageResults) {
    const results = JSON.parse(localStorageResults);
    printResults(results);
  } else {
    getData();
  }
}
