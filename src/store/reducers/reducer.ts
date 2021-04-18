import gameBoard from '../../gameLogic/gameboard/gameboard';
import { game } from '../../type';

const initialState: game = {
  board1: gameBoard(),
  board2: gameBoard(),
  playerTurn: 1,
  isFinished: false,
};

const reducer = (/*state: game = initialState, action*/) => {};
export default reducer;
