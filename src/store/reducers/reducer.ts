import gameBoard from '../../gameLogic/gameboard/gameboard';
import { game } from '../../type';
import * as actions from '../actions';

const initialState: game = {
  board1: gameBoard(),
  board2: gameBoard(),
  playerTurn: 1,
  isFinished: false,
};

initialState.board2.placeShipsRandomly();

const reducer = (state: game = initialState, action: any): game => {
  switch (action.type) {
    case actions.MAKE_SHOT:
      const newState: game = {
        board1: { ...state.board1 },
        board2: { ...state.board2 },
        playerTurn: state.playerTurn,
        isFinished: state.isFinished,
      };
      newState.board2.hit(action.payload);
      return newState;
      break;

    default:
      return state;
  }
  return state;
};
export default reducer;
