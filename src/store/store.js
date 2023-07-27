import { configureStore } from '@reduxjs/toolkit';
import {Routes, SelectedRoute, Polylines} from './reducers/';
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		routes: Routes.reducer,
		selectedRoute: SelectedRoute.reducer,
		polylines: Polylines.reducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);