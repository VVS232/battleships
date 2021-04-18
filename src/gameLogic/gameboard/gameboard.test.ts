import gameBoard from './gameboard';
import Ship from '../ship/ship';

let board = gameBoard();
let ship: Ship;
beforeEach(() => {
  board = gameBoard();
  ship = new Ship(3, [3, 2], 'v');
});
test('gameboard field places the ship horizontally', () => {
  ship = new Ship(3, [3, 2], 'h');
  board.placeShip(ship, [3, 2], 'h');
  expect(board.grid[1][1]).toBe('empty');
  expect(board.grid[3][2]).toStrictEqual([ship, 1]);
  expect(board.grid[3][3]).toStrictEqual([ship, 2]);
  expect(board.grid[3][4]).toStrictEqual([ship, 3]);
  expect(board.grid[3][5]).toBe('empty');
});
test('gameboard field places the ship vertically', () => {
  board.placeShip(ship, [3, 2], 'v');
  expect(board.grid[1][1]).toBe('empty');
  expect(board.grid[3][2]).toStrictEqual([ship, 1]);
  expect(board.grid[3][3]).toBe('empty');
  expect(board.grid[4][2]).toStrictEqual([ship, 2]);
  expect(board.grid[5][2]).toStrictEqual([ship, 3]);
  expect(board.grid[6][2]).toBe('empty');
});
test('ship can be hit', () => {
  board.placeShip(ship, [3, 2], 'v');
  board.hit([3, 2]);
  expect(board.grid[3][2]).toStrictEqual([ship, 'hit']);
});

test('ship can be sunk', () => {
  board.placeShip(ship, [3, 2], 'v');
  board.hit([3, 2]);
  board.hit([4, 2]);
  board.hit([5, 2]);

  expect(board.grid[3][2]).toStrictEqual([ship, 'sunk']);
  expect(board.grid[4][2]).toStrictEqual([ship, 'sunk']);
  expect(board.grid[5][2]).toStrictEqual([ship, 'sunk']);
});
