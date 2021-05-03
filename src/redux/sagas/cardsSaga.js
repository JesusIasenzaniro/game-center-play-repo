import { call, put, takeEvery } from 'redux-saga/effects';
import { card_url as url } from './utils';

const cardName = 'Blue-Eyes';

function getApi() {
    return fetch(`${url}${cardName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
}

function* fetchListCards(action) {
    try {
        const listCards = yield call(getApi);
        yield put({ type: 'GET_CARDS_LIST_SUCCESS', listCards: listCards.data });
    } catch (e) {
        yield put({ type: 'GET_CARDS_LIST_FAILED', message: e.message });
    }
}

function* userSaga() {
    yield takeEvery('GET_CARDS_LIST_REQUESTED', fetchListCards);
}

export default userSaga;
