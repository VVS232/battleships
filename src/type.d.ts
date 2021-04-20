import Ship from './gameLogic/ship/ship';
interface game {
  readonly board1: board;
  readonly board2: board;
  readonly playerTurn: 1 | 2;
  readonly isFinished: boolean;
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

type board = {
  grid: grid;
  placeShip(
    shiplength: number,
    position: [keyof grid, keyof grid],
    direction: 'v' | 'h'
  ): 1 | 0;
  hit(position: [keyof grid, keyof grid]): void;
  isLost: boolean;
  shop: Array<{ length: number; direction: 'v' | 'h' }>;
  placeShipsRandomly(this: board): void;
};

type RootState = game;
