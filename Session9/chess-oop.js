class Player {
  name;
  score;
}
class Game {
  board;
  player1;
  player2;
  constructor(board, player1, player2) {
    this.board;
    //
  }
}
class Board {
  pieces;
  constructor() {
    this.pieces = [];
    for (let i = 1; i <= 8; i++) {
      this.pieces.push(new Pawn(this, "white", [i, 2]));
      this.pieces.push(new Pawn(this, "black", [i, 7]));
    }
  }
}
class Piece {
  board;
  color;
  #_coordinates;
  constructor(board, color, coordinates) {
    this.board = board;
    this.color = color;
    this._coordinates = coordinates;
  }

  canMove(x, y) {
    if (x < 1 || y < 1 || x > 8 || y > 8) return false;
    if (
      this.board.pieces.find(
        (x) =>
          x.color == this.color &&
          x.coordinates[0] == x &&
          x.coordinates[1] == y
      )
    )
      return false;
    return true;
  }

  move(x, y) {
    if (this.canMove(x, y)) {
      this.#_coordinates[0] = x;
      this.#_coordinates[1] = y;
    }
  }

  set coordinates(val) {
    if (val[0] > 0 && val[0] <= 8 && val[1] > 0 && val[1] <= 8)
      this.#_coordinates = val;
  }
  get coordinates() {
    return this.#_coordinates;
  }
}

class Bishop extends Piece {
  canMove(x, y) {
    if (!super.canMove(x, y)) return false;
    return x - this.coordinates[0] == y - this.coordinates[1];
  }
}

class Rook extends Piece {
  canMove(x, y) {
    if (!super.canMove(x, y)) return false;
    return x == this.coordinates[0] || y == this.coordinates[1];
  }
}

class Pawn extends Piece {
  canMove(x, y) {
    if (!super.canMove(x, y)) return false;
    if (x == this.coordinates[0] && y - this.coordinates[1] == 1) return true;
    return false;
  }
}
/////////////////////////////////

// let Board = function () {
//   this.lenght = 8;
//   this.width = 8;
//   this.pieces = [];
// };

// Board.prototype.startGame = function () {
//   for (let i = 0; i < 16; i++) {
//     this.pieces.push(new Piece(this, 1, 1, "pawn", "white"));
//     this.pieces.push(new Piece(this, 1, 1, "pawn", "black"));
//   }
// };

// Board.prototype.hasPiece = function (team, x, y) {
//   return this.pieces.some((e) => e.team == team && e.x == x && e.y == y);
// };

// let Piece = function (board, x, y, type, team) {
//   this.board = board;
//   this.team = team;
//   this.type = type;
//   this._x = x;
//   this._y = y;
// };

// let Pawn = function (board, x, y, team) {
//   Piece.call(this, board, x, y, "pawn", team);
// };

// Piece.prototype.canMove = function (x, y) {
//   if (x < 1 || y < 1 || x > this.board.lenght || y > this.board.width)
//     return false;
//   if (this.board.hasPiece(this.team, x, y)) return false;
//   return true;
// };

// Piece.prototype.getCoordinates = function () {
//   return `${this._x} ${this._y}`;
// };

// Pawn.prototype = Object.create(Piece.prototype);
// Pawn.prototype.canMove = function (x, y) {
//   //if (!this.__proto__.__proto__.canMove.call(this)) return false;
//   if (y <= this.y) return false;
//   return true;
// };

// let board = new Board();
// let pawn1 = new Pawn(board, 1, 2, "white");

export { Board, Pawn, Bishop, Rook };
