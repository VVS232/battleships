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
  let newState: game;
  switch (action.type) {
    case actions.MAKE_SHOT:
      newState = {
        board1: { ...state.board1 },
        board2: { ...state.board2 },
        playerTurn: state.playerTurn,
        isFinished: state.isFinished,
      };
      newState.board2.hit(action.payload);
      return newState;
    case actions.TURN_SHIP:
      newState = {
        board1: { ...state.board1, shop: [...state.board1.shop] },
        board2: { ...state.board2 },
        playerTurn: state.playerTurn,
        isFinished: state.isFinished,
      };
      newState.board1.shop[action.index].direction =
        newState.board1.shop[action.index].direction === 'h' ? 'v' : 'h';
      return newState;
    default:
      return state;
  }
};
export default reducer;
