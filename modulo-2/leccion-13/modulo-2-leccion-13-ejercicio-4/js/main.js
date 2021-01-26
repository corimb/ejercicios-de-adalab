'use strict';
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

// const sayHi = users.map((user) => {
//   if (user.isPremium) {
//     const sayHiPremium `Bienvenida  ${user.name}. Gracias por confiar en nosotros.`;
//   } else {
//     return `Bienvenida ${user.name}`;
//   }
// });
// console.log(sayHi);

const sayHiPremium = users.filter((user) => user.isPremium);
console.log(sayHiPremium);
const sayHiNonPremium = users.filter((user) => user.isPremium === false);
console.log(sayHiNonPremium);

for (const user of sayHiPremium) {
  console.log(`Bienvenida  ${user.name}. Gracias por confiar en nosotros.`);
}
for (const user of sayHiNonPremium) {
  console.log(`Bienvenida ${user.name}`);
}
