'use strict';

// OBJETO LITERAL:

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profession = 'periodista';
adalaber1.showBio = function () {
  return (
    'Mi nombre es ' +
    this.name +
    ', tengo ' +
    this.age +
    ' años y soy ' +
    this.profession
  );
};

console.log(adalaber1.showBio());

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.profession = 'actriz';
adalaber2.showBio = function () {
  return (
    'Mi nombre es ' +
    this.name +
    ', tengo ' +
    this.age +
    ' años y soy ' +
    this.profession
  );
};

console.log(adalaber2.showBio());

//usanddo this solo hemos tenido que copiar lo anterior.
