'use strict';
const selectOptions = document.querySelector('.js-name-select');

const people = [
  {
    firstName: 'María',
    lastName: 'Fernández',
    phone: '673467893',
  },
  {
    firstName: 'Rocío',
    lastName: 'Rodriguez',
    phone: '673967871',
  },
  {
    firstName: 'Elena',
    lastName: 'Perez',
    phone: '673476787',
  },
];
//al recargar la página queremos que el select tenga las opciones cargadas
window.addEventListener('load', fillSelectOptions);

function fillSelectOptions() {
  for (let i = 0; i < people.length; i++) {
    //cada vez que pasa por el array vamos a coger el valor de cada objeto(persona)
    const person = people[i];
    // creamos el tag option (hijo)
    const option = document.createElement('option');
    // creamos el (nieto) first name de cada objeto al recorrer el array
    const displayName = document.createTextNode(person.firstName);
    // añadimos el texto (nieto) al option (hijo)
    option.appendChild(displayName);
    // añadimos el atributo value (nieto) al option (hijo)
    option.setAttribute('value', person.firstName);
    // añadimos el option (hijo) al select (padre)
    selectOptions.appendChild(option);
    //select se pone al final del todo para que se quede con el último valor de los elementos
  }
}

// selectOptions.addEventListener('change', setName(event));
selectOptions.addEventListener('change', (event) => {
  const selectedName = event.target.value;
  const foundPerson = searchPerson(selectedName);
  if (foundPerson) {
    setName(foundPerson);
  }
});

function setName(foundPerson) {
  const firstName = document.querySelector('.js-first-name');
  const lastName = document.querySelector('.js-last-name');
  const phone = document.querySelector('.js-phone');
  firstName.value = foundPerson.firstName;
  lastName.value = foundPerson.lastName;
  phone.value = foundPerson.phone;
}

function searchPerson(selectedName) {
  for (let index = 0; index < people.length; index++) {
    const person = people[index];
    if (selectedName === person.firstName) {
      return person;
    }
  }
  return false;
}
