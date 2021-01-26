'use strict';
// estamos guardando las referencias de los elem del DOM para utilizarlas después
const nameInput = document.querySelector('.js-input');
const paragraph = document.querySelector('.js-paragraph');

//tenemos que escuchar los eventos del input y de la ventana al cargarse la página
nameInput.addEventListener('keyup', () => {
  printName();
  saveLocalStorage();
});

window.addEventListener('load', checkLocalStorage);

function printName() {
  const nameValue = nameInput.value;
  paragraph.innerHTML = nameValue;
}

//guarda el valor del input en el Local Storage si tiene algo escrito. Si no, borra la Key
function saveLocalStorage() {
  const nameValue = nameInput.value;
  if (nameValue.length > 0) {
    localStorage.setItem('name', nameValue);
  } else {
    localStorage.removeItem('name');
  }
}

// verifica si la Key existe y si es así coge su valor y lo asigna al párrafo y al input.
function checkLocalStorage() {
  const localStorageName = localStorage.getItem('name');
  if (localStorageName) {
    paragraph.innerHTML = localStorageName;
    nameInput.value = localStorageName;
  }
}

// ES POSIBLE QUE UNA KEY EXISTA Y ESTÉ VACÍA. POR ESO ES IMP VALIDAR QUE EXISTA Y SU VALOR POR SEPARADO EN CASO NECESARIO. (line.22 y 32)
