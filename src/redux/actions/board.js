import * as type from '../types';

export function getStart(idInterval) {
    return {
        type: type.SET_START_GAME,
        payload: idInterval,
    };
}

export function getRemainingTime(timer, victory) {
    return {
        type: type.SET_REMAINING_TIME,
        payload: { timer, victory },
    };
}
