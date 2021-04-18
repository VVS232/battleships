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
      ship: Ship,
      position: [keyof grid, keyof grid],
      direction: 'v' | 'h'
    ) {
      let [row, column] = position;
      if (direction === 'h') {
        for (let i = 0; i < ship.length; i++) {
          grid[row][column] = [ship, i + 1];
          column += 1;
        }
        return;
      }
      if (direction === 'v') {
        for (let i = 0; i < ship.length; i++) {
          grid[row][column] = [ship, i + 1];
          row += 1;
        }
        return;
      }
    },
    hit(position: [keyof grid, keyof grid]) {
      let [row, column] = position;
      if (grid[row][column] === 'empty') {
        grid[row][column] = 'miss';
        return 'miss';
      }
      if (typeof grid[row][column][1] === 'number') {
        let ship = grid[row][column][0] as Ship;
        ship.hit(grid[row][column][1] as number);
        if (ship.isSunk()) {
          let shipRow = ship.row;
          let shipColumn = ship.column;

          if (ship.direction === 'h') {
            for (let i = 0; i < grid[row][column][0].length; i++) {
              (grid[shipRow][shipColumn] as [
                Ship,
                number | 'hit' | 'sunk'
              ])[1] = 'sunk';
              shipColumn += 1;
            }
            return;
          } else {
            for (let i = 0; i < grid[row][column][0].length; i++) {
              (grid[shipRow][shipColumn] as [
                Ship,
                number | 'hit' | 'sunk'
              ])[1] = 'sunk';
              shipRow += 1;
            }
            return;
          }
        } else {
          (grid[row][column] as [Ship, number | 'hit' | 'sunk'])[1] = 'hit';
        }
      }
    },
  };
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
