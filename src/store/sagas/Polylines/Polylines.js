import { call, takeEvery, put } from "redux-saga/effects";
import {Polylines} from '../../../store/reducers';
import {Http, Helpers} from '../../../globals';

export const sagaActions = {
  FETCH_DATA_POLYLINE: "FETCH_DATA_POLYLINE"
};

let callAPI = async (route) => {
  const coordinatesForUrlApi = Helpers.convertCoordinatesForUrlApi(route);
  const getCoordinatesFromApi = await Http.get(coordinatesForUrlApi);
  let polyline = Helpers.convertApiRequestInCoordinatesForMap(getCoordinatesFromApi);

  return polyline;
};

export function* fetchDataSaga(data) {
  try {
    let result = yield call(() =>
      callAPI(data.route)
    );
    if (!result) throw 'Ошибка получения polylines по API';
    yield put(Polylines.set(result));
  } catch (e) {
    yield put(Polylines.error(e));
  }
}

export function* polylinesSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_POLYLINE, fetchDataSaga);
}