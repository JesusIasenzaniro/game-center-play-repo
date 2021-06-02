import * as type from '../types';

const initialState = {
    listCards: [], //generic deck  API (list of cards)
    cardsInGame: [], // cards on the cardsInGame (matrix of cards)
    flipCards: {}, // cards that are open (matrix of booleans)
    pairOfCards: [],
    // match: [], // use this to compare two cards and then put then in flipcards if they match
    firstFlip: null,
    firstIndex: null,
    flipNumbers: '0',
    victory: false,
};
//!busy && match.includes(idCard)&&idCard !==firstFlip

export default function Cards(state = initialState, action) {
    switch (action.type) {
        case type.GET_CARDS_LIST_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_CARDS_LIST_SUCCESS:
            const sliceCards = action.listCards.slice(0, 9);
            let pairOfCards = [...sliceCards, ...sliceCards];
            let shuffleCards = pairOfCards.sort(() => Math.random() - 0.5);
            let notFlippedCards = [];
            for (let i = 0; i < shuffleCards.length; i++) {
                notFlippedCards.push(false);
            }

            return {
                ...state,
                loading: false,
                listCards: action.listCards,
                cardsInGame: shuffleCards,
                flipCards: notFlippedCards,
            };
        case type.GET_CARDS_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };

        case type.SET_FLIP_CARD:
            let flippedCards = { ...state.flipCards };
            flippedCards[action.payload] = true;

            let tempFlipNumbers = state.flipNumbers;
            tempFlipNumbers++;

            return {
                ...state,
                flipCards: flippedCards,
                flipNumbers: tempFlipNumbers,
            };

        case type.SET_MATCH_CARD:
            //in this case we are creating a copy of each of our states, this case we are maintainig the type of data from the initial state
            //except the ones that were null
            //we have to create a new space in memory in order to re-render
            const tempState = { ...state };
            let flipCards = { ...tempState.flipCards };
            let firstIndex = { ...tempState.firstIndex };
            let firstFlip = { ...tempState.firstFlip };

            if (tempState.firstFlip) {
                if (tempState.firstFlip === action.payload.id) {
                    //   console.log('match');
                    firstFlip = null;
                } else {
                    //   console.log('not match');

                    flipCards[tempState.firstIndex] = false;
                    flipCards[action.payload.index] = false;
                    //   console.log(flipCards, tempState.firstIndex, action.payload.index);

                    firstFlip = null;
                    firstIndex = null;
                }
            } else {
                firstFlip = action.payload.id;
                firstIndex = action.payload.index;
            }

            let values = Object.values(tempState.flipCards);

            if (
                values.every((value) => {
                    return value === true;
                })
            ) {
                tempState.victory = true;
                clearInterval(action.payload.idInterval);
            }

            return {
                //and always return the ones we have to re-render
                ...tempState,
                flipCards,
                firstFlip,
                firstIndex,
            };

        default:
            return state;
    }
}
