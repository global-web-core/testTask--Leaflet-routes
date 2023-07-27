import {polylinesSaga} from './Polylines/Polylines';
import {fork} from 'redux-saga/effects';

export function* rootSaga() {
  yield fork(polylinesSaga)
}