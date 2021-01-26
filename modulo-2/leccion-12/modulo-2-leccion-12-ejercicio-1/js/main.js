'use strict';

const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  const list = document.querySelector('.list');
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(numbers[i]);
  newItem.appendChild(newContent);
  list.appendChild(newItem);
  console.log(list);
}
