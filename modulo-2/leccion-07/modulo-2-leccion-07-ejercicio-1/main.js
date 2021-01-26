'use strict';

const movies = ['película1', 'película2', 'película3'];
// console.log(movies);
movies[3] = 'película4';
// console.log(movies);
movies[2] = 'película2bis';
// console.log(movies);

function workWithMovies() {
  console.log(movies);
}
workWithMovies(movies);
