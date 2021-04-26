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
        .then(
            (response) => response.json()
            // console.log(response.json())
        )
        .catch((error) => {
            throw error;
        });
}

function* fetchUsers(action) {
    try {
        const cards = yield call(getApi);
        yield put({ type: 'GET_CARDS_SUCCESS', cards: cards.data });
    } catch (e) {
        yield put({ type: 'GET_CARDS_FAILED', message: e.message });
    }
}

function* userSaga() {
    yield takeEvery('GET_CARDS_REQUESTED', fetchUsers);
}

export default userSaga;
