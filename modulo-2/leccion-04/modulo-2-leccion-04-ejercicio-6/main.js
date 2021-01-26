'use strict';

function getEl(a) {
  const result = document.querySelector(a);
  if (result === null) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${a}`);
  } else {
    return result;
  }
}

const btnEl = getEl('.titlee');

console.log(btnEl);
