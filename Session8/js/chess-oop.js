class Bishop {
  color;
  coordinates;
  constructor(color, coordinates) {
    this.color = color;
    this.coordinates = coordinates;
  }
  canMove(x, y) {
    return true;
  }
  move(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }
}


let bishop1 = new Bishop("white", [3, 1]);
let bishop2 = new Bishop("white", [6, 1]);
let bishop3 = new Bishop("black", [3, 8]);
let bishop4 = new Bishop("black", [6, 8]);