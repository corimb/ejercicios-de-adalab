'use strict';

class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side * this.side;
  }
}
const theSquareOne = new Square(1);
const theSquareTwo = new Square(3);
const theSquareThree = new Square(7);

console.log(
  `The square1 has ${
    theSquareOne.side
  } sides, ${theSquareOne.perimeter()} perimeter and ${theSquareOne.area()} area`
);

console.log(
  `The square2 has ${
    theSquareTwo.side
  } sides, ${theSquareTwo.perimeter()} perimeter and ${theSquareTwo.area()} area`
);

console.log(
  `The square3 has ${
    theSquareThree.side
  } sides, ${theSquareThree.perimeter()} perimeter and ${theSquareThree.area()} area`
);
