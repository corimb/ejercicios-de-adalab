'use strict';

const input = document.querySelector('#input');

console.dir(input);

//INVESTIGAR:
//value:
// // value: "" --> significa que no tiene value hasta que no escribimos nada en el input. Una vez que escribamos algo se guarda ese dato aquí. ej: '1' 'corina'.
// // valueAsDate: null --> recoge fechas
// // valueAsNumber: NaN -->recoge números

// document.body.innerHTML = `
//   <input type="date">
//   <input type="number">
// `;

// [...document.querySelectorAll('input')].forEach((input) => {
//   input.valueAsNumber = 42;
//   console.log(`${input.type}: ${input.value}`);
// });

//nodeName --> nos dice el tipo de elemento antes era input y ahora es un button.

const button = document.querySelector('.btn');
console.dir(button);

//required --> nos dice si el input tiene asignad el required o no mediante un booleando (true/false)
