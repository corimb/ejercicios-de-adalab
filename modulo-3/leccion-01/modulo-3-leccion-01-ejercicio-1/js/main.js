'use strict';
class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return side * side;
  }
}

const theSquare = new Square();

const side = 9;
console.log(theSquare.perimeter(side));
console.log(theSquare.area(side));

// creamos los métodos perimeter y area
// con un return ponemos la operación a realizar
// creamos una instancia llamada theSquare a la que le pasaremos los métodos de perimeter y area y el valor
// creamos una constante con el valor del lado del cuadrado (9)
// consoleamos la instancia seguida del método y su parámetro.
