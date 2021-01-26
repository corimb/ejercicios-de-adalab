'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
//let userAvatar = 'http://www.fillmurray.com/300/300';
let userAvatar = '';

let avatar = document.querySelector('img');

avatar.src = userAvatar || DEFAULT_AVATAR;

//let avatar = document.querySelector('img').src= userAvatar || DEFAULT_AVATAR;;
