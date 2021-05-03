// import { combineReducers } from 'redux';
import * as type from '../types';

const initialState = {
    start: true,
};

export default function Board(state = initialState, action) {
    switch (action.type) {
        case type.SET_START_GAME:
            return {
                ...state,
                start: false,
            };

        default:
            return state;
    }
}
