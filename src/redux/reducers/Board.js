// import { combineReducers } from 'redux';
import * as type from '../types';

const initialState = {
  start: true,
  timeRemaining: '2',
};

export default function Board(state = initialState, action) {
  switch (action.type) {
    case type.SET_START_GAME:
      return {
        ...state,
        start: false,
      };
    case type.SET_REMAINING_TIME:
      if (state.start === false) {
        --state.timeRemaining;
        if (state.timeRemaining === 0) {
          clearInterval(action.payload);
        }
      }
      return {
        ...state,
      };

    default:
      return state;
  }
}
