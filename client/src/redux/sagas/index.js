// import { all, put, select, takeEvery } from 'redux-saga/effects';
// import { SET_DATA } from '../constants';
// import { downPrice, setPrevData, upPrice } from '../actions/actionCreator';

export function* workerSaga() {
    yield;
}

export function* watchingSaga() {
    yield workerSaga;
}

export default function* rootSaga() {
    yield watchingSaga();
}
