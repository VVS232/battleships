import gameBoard from '../gameLogic/gameboard/gameboard';

const initialState: game = {
  board1: gameBoard(),
  board2: gameBoard(),
  playerTurn: 1,
};

const reducer = (state: game = initialState, action): game => {};
export default reducer;
