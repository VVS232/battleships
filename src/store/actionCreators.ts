import { grid } from '../type';
import * as actions from './actions';

export function shoot(payload: [keyof grid, keyof grid]) {
  return {
    type: actions.MAKE_SHOT,
    payload,
  };
}

export function turnShip(index: number) {
  return {
    type: actions.TURN_SHIP,
    index,
  };
}
