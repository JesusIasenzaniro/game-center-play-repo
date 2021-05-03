import * as type from '../types';

export function getCards(listCards) {
    return {
        type: type.GET_CARDS_LIST_REQUESTED,
        payload: listCards,
    };
}

export function setFlipCard(index) {
    return {
        type: type.SET_FLIP_CARD,
        payload: index,
    };
}
