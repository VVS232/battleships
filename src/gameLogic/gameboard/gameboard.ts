import Ship from '../ship/ship';
export default function gameBoard() {
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
        return;
      }
      if (direction === 'v') {
        placeVertically(ship, this.grid, position);
        return;
      }
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
    },
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
    for (let i = 0, c = column - 1; i <= shiplength + 1; i++, c++) {
      for (let j = 0, r = row - 1; j < 3; j++, r++) {
        if (
          r > 11 ||
          c > 11 ||
          grid[r as keyof grid][c as keyof grid] !== 'empty'
        ) {
          return false; //false if ship cannot be placed
        }
      }
    }
  }
  if (direction === 'v') {
    for (let i = 0, r = row - 1; i <= shiplength + 1; i++, r++) {
      for (let j = 0, c = column - 1; j <= column + 1; j++, c++) {
        if (
          r > 10 ||
          c > 10 ||
          grid[r as keyof grid][c as keyof grid] !== 'empty'
        ) {
          return false;
        }
      }
    }
  }
  return true;
}
