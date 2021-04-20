import { board } from '../../type';
import Ship from '../ship/ship';
export default function gameBoard(): board {
  const grid: grid = {
    1: Array(10).fill('empty'),
    2: Array(10).fill('empty'),
    3: Array(10).fill('empty'),
    4: Array(10).fill('empty'),
    5: Array(10).fill('empty'),
    6: Array(10).fill('empty'),
    7: Array(10).fill('empty'),
    8: Array(10).fill('empty'),
    9: Array(10).fill('empty'),
    10: Array(10).fill('empty'),
  };
  return {
    grid,
    placeShip(
      shiplength: number,
      position: [keyof grid, keyof grid],
      direction: 'v' | 'h'
    ) {
      let ship = new Ship(shiplength, position, direction);
      if (!checkPlacePossibility(shiplength, position, direction, this.grid)) {
        return 1;
      }
      if (direction === 'h') {
        placeHorizontally(ship, this.grid, position);
        return 0;
      }
      if (direction === 'v') {
        placeVertically(ship, this.grid, position);
        return 0;
      }
      return 1;
    },
    hit(position: [keyof grid, keyof grid]) {
      let [row, column] = position;
      if (grid[row][column] === 'empty') {
        grid[row][column] = 'miss';
        return;
      }
      if (typeof grid[row][column][1] === 'number') {
        let ship = grid[row][column][0] as Ship;
        ship.hit(grid[row][column][1] as number);
        if (ship.isSunk()) {
          markShipAsSunk(ship, this.grid);
        } else {
          (grid[row][column] as [Ship, number | 'hit' | 'sunk'])[1] = 'hit';
        }
      }
      this.isLost = checkLost(this.grid);
    },
    isLost: false,
    shop: [
      {
        length: 4,
        direction: 'v',
      },
      {
        length: 3,
        direction: 'v',
      },
      {
        length: 3,
        direction: 'v',
      },
      {
        length: 2,
        direction: 'v',
      },
      {
        length: 2,
        direction: 'v',
      },
      {
        length: 2,
        direction: 'v',
      },
      {
        length: 1,
        direction: 'v',
      },
      {
        length: 1,
        direction: 'v',
      },
      {
        length: 1,
        direction: 'v',
      },
      {
        length: 1,
        direction: 'v',
      },
    ],
    placeShipsRandomly: placeShipsRandomly,
  };
}

function markShipAsSunk(ship: Ship, grid: grid) {
  let shipRow = ship.row;
  let shipColumn = ship.column;

  if (ship.direction === 'h') {
    for (let i = 0; i < ship.length; i++) {
      (grid[shipRow][shipColumn] as [Ship, number | 'hit' | 'sunk'])[1] =
        'sunk';
      shipColumn += 1;
    }
    return;
  } else {
    for (let i = 0; i < ship.length; i++) {
      (grid[shipRow][shipColumn] as [Ship, number | 'hit' | 'sunk'])[1] =
        'sunk';
      shipRow += 1;
    }
    return;
  }
}

function placeHorizontally(
  ship: Ship,
  grid: grid,
  position: [keyof grid, keyof grid]
) {
  let [row, column] = position;

  for (let i = 0; i < ship.length; i++) {
    grid[row][column] = [ship, i + 1];
    column += 1;
  }
  return;
}
function placeVertically(
  ship: Ship,
  grid: grid,
  position: [keyof grid, keyof grid]
) {
  let [row, column] = position;

  for (let i = 0; i < ship.length; i++) {
    grid[row][column] = [ship, i + 1];
    row += 1;
  }
  return;
}

function checkPlacePossibility(
  shiplength: number,
  position: [keyof grid | number, keyof grid | number],
  direction: 'v' | 'h',
  grid: grid
) {
  let [row, column] = position;

  if (direction === 'h') {
    if (shiplength > 9 - column) {
      return false;
    }
    for (let i = 0, c = column - 1; i <= shiplength + 1; i++, c++) {
      for (let j = 0, r = row - 1; j < 3; j++, r++) {
        if (r <= 0 || c < 0) {
          continue;
        }
        if (r == 11) {
          continue;
        }
        if (
          r > 10 ||
          c > 9 ||
          grid[r as keyof grid][c as keyof grid] !== 'empty'
        ) {
          return false; //false if ship cannot be placed
        }
      }
    }
  }
  if (direction === 'v') {
    if (shiplength > 10 - row) {
      return false;
    }
    for (let i = 0, r = row - 1; i <= shiplength + 1; i++, r++) {
      for (let j = 0, c = column - 1; j < 3; j++, c++) {
        if (r <= 0 || c < 0) {
          continue;
        }
        if (c == 10) {
          continue;
        }
        if (
          r > 10 ||
          c > 9 ||
          grid[r as keyof grid][c as keyof grid] !== 'empty'
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

function checkLost(grid: grid) {
  for (let row = 1; row < 11; row++) {
    for (let col = 0; col < 10; col++) {
      let gridCell = grid[row as keyof grid][col as keyof grid];
      if (
        gridCell === 'empty' ||
        gridCell === 'miss' ||
        gridCell[1] === 'sunk'
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}

function placeShipsRandomly(this: board) {
  for (let i = 0; i < this.shop.length; ) {
    if (this.shop[i] === undefined) {
      break;
    }
    let isSucces;
    do {
      let directions: ['h', 'v'] = ['h', 'v'];
      let direction = directions[Math.round(Math.random())];
      let row = (Math.floor(Math.random() * (10 - 1 + 1)) + 1) as keyof grid;
      let col = Math.floor(Math.random() * 10) as keyof grid;

      isSucces = this.placeShip(this.shop[i].length, [row, col], direction);
    } while (isSucces !== 0);
    this.shop.shift();
  }
}

type grid = {
  1: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
  2: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
  3: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
  4: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
  5: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
  6: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
  7: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
  8: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
  9: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
  10: ('empty' | 'miss' | [Ship, number | 'hit' | 'sunk'])[];
};
