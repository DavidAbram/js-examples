class Rectangle {

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calculateArea();
  }

}


const square = new Rectangle(10, 10);

square.calculateArea();

square.area;


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

Point.distance(p1, p2);