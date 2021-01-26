'use strict';
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

// Creamos una constante en la que guardamos una función anónima con el parámetro user que contiene el condicional.
//user en este caso es cada objeto del array.
//si cada objeto del array tiene el booleano true isPremium devuelve el primer saludo, si es falso devuelve el segundo saludo.
const sayHi = users.map((user) => {
  if (user.isPremium) {
    return `Bienvenida  ${user.name}. Gracias por confiar en nosotros.`;
  } else {
    return `Bienvenida ${user.name}`;
  }
});
console.log(sayHi);
