'use strict';

const adalabers = [
  {
    name: 'María',
    age: 29,
    profession: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    profession: 'ingeniera química',
  },
  {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
  },
  {
    name: 'Rocío',
    age: 25,
    profession: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    profession: 'diseñadora',
  },
];

function countAdalabers() {
  return adalabers.length;
}
countAdalabers(adalabers);

function averageAge(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].age / arr.length;
  }
  console.log(`The average age of the group is ${result}.`);
}
averageAge(adalabers);

function countDesigners(arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].profession === 'diseñadora') {
      acc += 1;
    }
  }
  console.log(`There are ${acc} designers.`);
}
countDesigners(adalabers);
