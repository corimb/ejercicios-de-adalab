'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  if (counter <= 59) {
    time.innerHTML = 'Escrito hace ' + counter + ' segundos';
  } else {
    time.innerHTML = 'Escrito hace 1 minuto';
  }
};

setInterval(incrementAndShowCounter, 1000);
