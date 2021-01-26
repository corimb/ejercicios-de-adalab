'use strict';
const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter((pin) => pin % 2 === 0);
console.log(evenPins);

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

// reutilizando la constante evenPins: busca en users los pins que tenemos en el array evenPins:
const evenUsers1 = users.filter((user) => evenPins.includes(user.pin));
console.log(evenUsers1);
// constante nueva que hace la búsqueda directamente en el array users:
const evenUsers2 = users.filter((user) => user.pin % 2 === 0);
console.log(evenUsers2);
