'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];
//Ordenar por nombre alfabéticamente:
const sortUsersByName = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortUsersByName);
//Ordenar por pin numéricamente:
const sortUsersByPin = users.sort((a, b) => a.pin - b.pin);
console.log(sortUsersByPin);
