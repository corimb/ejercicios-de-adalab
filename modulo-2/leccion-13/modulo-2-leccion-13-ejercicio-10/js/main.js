'use strict';
// const times = [56, 9, 45, 28, 35];
// const result = times.reduce((acc, time) => acc + time, 0) / times.length;
// console.log(result);

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const findUserError = users.find((user) => user.pin === 5232);
console.log(findUserError.name);

const findPositionUserError = users.findIndex((user) => user.pin === 5232);
console.log(findPositionUserError);

users.splice(3, 1);
console.log(users);
