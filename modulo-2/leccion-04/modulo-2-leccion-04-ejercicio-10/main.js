'use strict';

function calculator(isBorderBox, width, padding, borderSize) {
  let widthContent = 0;
  let widthBox = 0;
  if (isBorderBox) {
    widthContent = width - borderSize - padding;
    widthBox = width;
  } else {
    widthContent = width;
    widthBox = width + paddig + borderSize;
  }
  return `El ancho del contenido es: ${widthContent} px y el ancho total de la caja es: ${widthBox}px.`;
}

console.log(calculator(true, 100, 5, 10));

// const calc = calculator(true, 100, 5, 10);
//console.log(calc);

// const result = document.querySelector('.result');
// result.innerHTML = calc;

//width:  100px
//border-box 100px;
//content-box: 120px

// border-box:
//   content: width - border - padding
//   box: width

// content-box:
//   content: width
//   box: width + padding + border
