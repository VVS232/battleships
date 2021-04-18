import Ship from './gameLogic/ship/ship';
interface game {
  readonly board1: {
    readonly grid: grid;
    readonly hit: (position: [keyof grid, keyof grid]) => void;
    readonly placeShip: (
      shiplength: number,
      position: [keyof grid, keyof grid],
      direction: 'v' | 'h'
    ) => 1 | undefined;
    readonly isLost: boolean;
  };
  readonly board2: {
    readonly grid: grid;
    readonly hit: (position: [keyof grid, keyof grid]) => void;
    readonly placeShip: (
      shiplength: number,
      position: [keyof grid, keyof grid],
      direction: 'v' | 'h'
    ) => 1 | undefined;
    readonly isLost: boolean;
  };
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
  ): 1 | undefined;
  hit(position: [keyof grid, keyof grid]): void;
  isLost: boolean;
};

type RootState = game;
