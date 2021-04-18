interface game {
  board1: {
    grid: grid;
    hit: (position: [keyof grid, keyof grid]) => void;
    placeShip: (
      shiplength: number,
      position: [keyof grid, keyof grid],
      direction: 'v' | 'h'
    ) => void;
  };
  board2: {
    grid: grid;
    hit: (position: [keyof grid, keyof grid]) => void;
    placeShip: (
      shiplength: number,
      position: [keyof grid, keyof grid],
      direction: 'v' | 'h'
    ) => void;
  };
  playerTurn: 1 | 2;
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
