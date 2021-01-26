'use strict';

//crear una constante para el elemento que vamos a cambiar en el HTML

const container = document.querySelector('.container');

//crear una constante con el nuevo mensaje que queremos que aparezca en el párrafo
const newParragraph =
  '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis ut suscipit deleniti quaerat animi esse incidunt tenetur soluta quod sit tempora deserunt quos dolores laudantium totam libero, rem aperiam!</p>';

// FUNCIÓN NOMINAL

function addParagraph() {
  if (container.childElementCount < 2) {
    container.innerHTML += newParragraph;
  }
}

container.addEventListener('mouseover', addParagraph);

function removeParagraph() {
  container.innerHTML = newParragraph;
}

container.addEventListener('mouseout', removeParagraph);

//  FUNCIÓN ANÓNIMA

// paragraph.addEventListener('mouseover', function () {
//   paragraph.innerHTML += newParragraph;
// });

// paragraph.addEventListener('mouseout', function () {
//   paragraph.innerHTML = newParragraph;
// });
