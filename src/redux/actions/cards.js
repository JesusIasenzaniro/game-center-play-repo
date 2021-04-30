import * as type from '../types';

export function getCards(cards) {
    return {
        type: type.GET_CARDS_REQUESTED,
        payload: cards,
    };
}

export function getFlipCard(cards) {
    return {
        type: type.GET_CARD_FLIPED,
        payload: cards,
    };
}
