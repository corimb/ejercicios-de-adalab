'use strict';

const favourite = document.querySelector('.js-input-favourite');
const button = document.querySelector('.js-submit-button');

// for (let i=0; i < sendInfo.length); i++) {
//   console.log(`A mí también me encantó ${sendInfo[i]`);
// }
// const inputValue = favourite.value;
// for (let i = 0; i < inputValue.length; i++) {
//   console.log(`A mí también me encantó "${inputValue[i]}"`);
// }

const inputValue = favourite.value;
let obra = [inputValue];
for (const title of obra) {
  const result = `A mí también me encantó ${title}`;
  console.log(result);
}

button.addEventListener('click', result);
