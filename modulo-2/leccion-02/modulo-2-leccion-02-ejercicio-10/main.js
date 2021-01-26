'use strict';
const hourLife = document.querySelector('p');
console.log(hourLife);
console.log(hourLife.innerHTML);
const hourDay = 24;

const dayYear = 365;

const hourYear = hourDay * dayYear;

const result = hourYear * parseInt(hourLife.innerHTML);

console.log(result);
