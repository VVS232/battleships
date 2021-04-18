import gameBoard from '../../gameLogic/gameboard/gameboard';
import { game } from '../../type';

const initialState: game = {
  board1: gameBoard(),
  board2: gameBoard(),
  playerTurn: 1,
  isFinished: false,
};

const reducer = (state: game = initialState, action: any): game => {
  switch (action.type) {
    case '':
      break;

    default:
      return state;
  }
  return state;
};
export default reducer;
