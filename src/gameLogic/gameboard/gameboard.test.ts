import gameBoard from './gameboard';
import Ship from '../ship/ship';

let board = gameBoard();
beforeEach(() => {
  board = gameBoard();
});
test('gameboard field places the ship horizontally', () => {
  board.placeShip(3, [3, 2], 'h');
  expect(board.grid[1][1]).toBe('empty');
  expect(board.grid[3][2][0]).toBeInstanceOf(Ship);
  expect(typeof board.grid[3][2][1]).toBe('number');
  expect(board.grid[3][3][0]).toBeInstanceOf(Ship);
  expect(board.grid[3][4][0]).toBeInstanceOf(Ship);
  expect(board.grid[3][5]).toBe('empty');
});
test('gameboard field places the ship vertically', () => {
  let ship: Ship = new Ship(3, [3, 2], 'v');

  board.placeShip(3, [3, 2], 'v');
  expect(board.grid[1][1]).toBe('empty');
  expect(board.grid[3][2]).toStrictEqual([ship, 1]);
  expect(board.grid[3][3]).toBe('empty');
  expect(board.grid[4][2]).toStrictEqual([ship, 2]);
  expect(board.grid[5][2]).toStrictEqual([ship, 3]);
  expect(board.grid[6][2]).toBe('empty');
});
test('ship can be hit', () => {
  board.placeShip(3, [3, 2], 'v');
  board.hit([3, 2]);
  expect(board.grid[3][2][1]).toStrictEqual('hit');
});

test('ship can be sunk', () => {
  board.placeShip(3, [3, 2], 'v');
  board.hit([3, 2]);
  board.hit([4, 2]);
  board.hit([5, 2]);

  expect(board.grid[3][2][1]).toBe('sunk');
  expect(board.grid[4][2][1]).toBe('sunk');
  expect(board.grid[5][2][1]).toBe('sunk');
  expect(board.grid[3][2][0]).toBeInstanceOf(Ship);
  expect(board.grid[4][2][0]).toBeInstanceOf(Ship);
  expect(board.grid[5][2][0]).toBeInstanceOf(Ship);
});

test('does not allow to place ship where ship is already preset vertically', () => {
  board.placeShip(3, [3, 2], 'v');
  expect(board.placeShip(3, [3, 2], 'v')).toBe(1);
  expect(board.placeShip(3, [4, 2], 'v')).toBe(1);
  expect(board.placeShip(3, [5, 2], 'v')).toBe(1);
});
test('does not allow to place ship where ship is already preset horizontally', () => {
  board.placeShip(3, [3, 2], 'h');
  expect(board.placeShip(3, [3, 2], 'v')).toBe(1);
  expect(board.placeShip(3, [3, 3], 'v')).toBe(1);
  expect(board.placeShip(3, [3, 4], 'h')).toBe(1);
  expect(board.placeShip(3, [2, 2], 'h')).toBe(1);
  expect(board.placeShip(3, [2, 3], 'h')).toBe(1);
  expect(board.placeShip(3, [2, 1], 'h')).toBe(1);
});
test('does not allow to place ship nearby ', () => {
  board.placeShip(3, [3, 2], 'v');
  expect(board.placeShip(3, [2, 2], 'h')).toBe(1);
  expect(board.placeShip(3, [3, 3], 'h')).toBe(1);
  expect(board.placeShip(3, [4, 3], 'h')).toBe(1);
  expect(board.placeShip(3, [6, 2], 'h')).toBe(1);
});

test('does not allow to place ship not in the grid', () => {
  expect(board.placeShip(3, [3, 9], 'h')).toBe(1);
  expect(board.placeShip(4, [8, 8], 'h')).toBe(1);
  expect(board.placeShip(4, [8, 2], 'v')).toBe(1);
});
