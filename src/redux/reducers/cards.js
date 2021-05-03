// import { combineReducers } from 'redux';
import * as type from '../types';

const initialState = {
    listCards: [], //generic deck  API (list of cards)
    board: [], // cards on the board (matrix of cards)
    flipCards: [], // cards that are open (matrix of booleans)
};

export default function Board(state = initialState, action) {
    switch (action.type) {
        case type.GET_CARDS_LIST_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_CARDS_LIST_SUCCESS:
            const sliceCards = action.listCards.slice(0, 9);
            const pairOfCards = [...sliceCards, ...sliceCards];
            let notFlippedCards = [];
            for (let i = 0; i < pairOfCards.length; i++) {
                notFlippedCards.push(false);
            }
            return {
                ...state,
                loading: false,
                listCards: action.listCards,
                board: pairOfCards,
                flipCards: notFlippedCards,
            };
        case type.GET_CARDS_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };

        case type.SET_FLIP_CARD:
            let flippedCards = state.flipCards;
            flippedCards[action.payload] = true;
            return {
                ...state,
                flipCards: flippedCards,
            };

        default:
            return state;
    }
}
