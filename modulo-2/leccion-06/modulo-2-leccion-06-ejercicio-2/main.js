'use strict';

// OBJETO LITERAL:

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profession = 'periodista';
adalaber1.run = 'Estoy corriendo';
adalaber1.runAMarathon = (distance) =>
  `Estoy corriendo un maratón de ${distance} kilómetros`;
console.log(adalaber1.runAMarathon(50));

//runAMarathon es una función y distance su parámetro
//la frse es el return de esa función donde se sustituye el parámetro distance que se lo damos abajo en console.log.
