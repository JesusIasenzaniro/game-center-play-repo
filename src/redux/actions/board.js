import * as type from '../types';

export function getStart() {
  return {
    type: type.SET_START_GAME,
  };
}

export function getRemainingTime(timer, victory) {
  return {
    type: type.SET_REMAINING_TIME,
    payload: {timer, victory},
  };
}
