export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  constructor(xNum, yNum) {
    this.xNum = xNum;
    this.yNum = yNum;
  }

  get x() {
    return this.xNum;
  }

  get y() {
    return this.yNum;
  }

  static plus(vector1, vector2) {
    let finalX = vector1.x + vector2.x;
    let finalY = vector1.y + vector2.y;
    return new Vector(finalX, finalY);
  }

  static minus(vector1, vector2) {
    let finalX = vector1.x - vector2.x;
    let finalY = vector1.y - vector2.y;
    return new Vector(finalX, finalY);
  }

  distance() {
    return Math.sqrt(Math.pow(this.xNum, 2) + Math.pow(this.yNum, 2));
  }
}
