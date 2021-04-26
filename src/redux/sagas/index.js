import { all } from 'redux-saga/effects';
import cardsSaga from './cardsSaga';

export default function* rootSaga() {
    yield all([cardsSaga()]);
}
