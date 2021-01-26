'use strict';
// estamos guardando las referencias de los elem del DOM para utilizarlas después
const nameInput = document.querySelector('.js-input-name');
const surnameInput = document.querySelector('.js-input-surname');
//creamos una variable para seleccionar los dos inputs
const inputs = document.querySelectorAll('.js-input');
const paragraph = document.querySelector('.js-paragraph');

const user = {
  name: '',
  surname: '',
};

//para cada input escuchamos el evento keyup y se ejecutan las funciones.
inputs.forEach((input) => {
  input.addEventListener('keyup', () => {
    printName();
    setDataUser();
    saveLocalStorage();
  });
});

window.addEventListener('load', checkLocalStorage);

function printName() {
  const nameValue = nameInput.value;
  const surnameValue = surnameInput.value;
  paragraph.innerHTML = nameValue + ' ' + surnameValue;
}

function setDataUser() {
  const nameValue = nameInput.value;
  const surnameValue = surnameInput.value;
  //añadimos al objeto los valores que recogemos de los inputs
  user.name = nameValue;
  user.surname = surnameValue;
}

//guarda el objeto en el Local Storage si name tiene algo escrito. Si no, borra la Key
function saveLocalStorage() {
  if (user.name.length > 0) {
    // utilizamos el JSON.stringify porque no es un número, cadena, booleano --> Pasa el objeto a una cadena de texto
    localStorage.setItem('name', JSON.stringify(user));
  } else {
    localStorage.removeItem('name');
  }
}

// verifica si la Key existe y si es así coge su valor y lo asigna al párrafo y al input.
function checkLocalStorage() {
  const localStorageName = localStorage.getItem('name');
  if (localStorageName) {
    // hacemos el proceso inverso a la línea 43: cadena de texto --> objeto
    // u tiene la misma estructura que user. Es una copia restaurada del localStorage que usamos para mostrar los datos en el párrafo y en el input
    const u = JSON.parse(localStorageName);
    paragraph.innerHTML = u.name + ' ' + u.surname;
    nameInput.value = u.name;
    surnameInput.value = u.surname;
  }
}
