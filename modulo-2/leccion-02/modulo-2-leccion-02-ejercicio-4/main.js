'use strict';

const totalMoney = 128;
const people = 9;
const payMore = 2;

// Opción 1:
const payNormal = totalMoney / people - payMore / people;

const payAna = payNormal + payMore;

console.log(payAna);
console.log(payNormal);

// Opción 2:
// const payNormal = (totalMoney - payMore) / 9;

// const payAna = payNormal + payMore;

// console.log(payAna);
// console.log(payNormal);
