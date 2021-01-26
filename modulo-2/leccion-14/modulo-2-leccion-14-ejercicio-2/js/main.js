'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  if (counter <= 12) {
    const time = document.querySelector('.time');
    time.innerHTML = counter;
  }
};

setInterval(incrementAndShowCounter, 1000);
