// import { combineReducers } from 'redux';
import * as type from '../types';

const initialState = {
    start: false,
    timeRemaining: '100',
    idInterval: null,
    victory: false,
};

export default function Board(state = initialState, action) {
    switch (action.type) {
        case type.SET_START_GAME:
            return {
                ...state,
                start: true,
                idInterval: action.payload,
            };
        case type.SET_REMAINING_TIME:
            //you have to always create a copy of the state, in this case is more easy because the type of data, that is a string
            let tempTiming = state.timeRemaining;

            // const tempState = { ...state };

            if (state.start === true) {
                --tempTiming;
                if (tempTiming === 0 && state.idInterval !== null) {
                    clearInterval(state.idInterval);
                }

                // the value of this comes from MemoryPage, is the timer
                //victory comes MemoryPage
            }
            return {
                ...state,
                timeRemaining: tempTiming,
            };

        default:
            return state;
    }
}
