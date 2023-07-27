import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: 1,
		nameRoute: "Маршрут №1",
		checkpoints: [
			{nameCheckpoint: 'Точка 1', coordinates: {lat: 59.84660399, lng: 30.29496392}},
			{nameCheckpoint: 'Точка 2', coordinates: {lat: 59.82934196, lng: 30.42423701}},
			{nameCheckpoint: 'Точка 3', coordinates: {lat: 59.83567701, lng: 30.38064206}},
		]
	},
	{
		id: 2,
		nameRoute: "Маршрут №2",
		checkpoints: [
			{nameCheckpoint: 'Точка 1', coordinates: {lat: 59.82934196, lng: 30.42423701}},
			{nameCheckpoint: 'Точка 2', coordinates: {lat: 59.82761295, lng: 30.41705607}},
			{nameCheckpoint: 'Точка 3', coordinates: {lat: 59.84660399, lng: 30.29496392}},
		]
		},
	{
		id: 3,
		nameRoute: "Маршрут №3",
		checkpoints: [
			{nameCheckpoint: 'Точка 1', coordinates: {lat: 59.83567701, lng: 30.38064206}},
			{nameCheckpoint: 'Точка 2', coordinates: {lat: 59.84660399, lng: 30.29496392}},
			{nameCheckpoint: 'Точка 3', coordinates: {lat: 59.82761295, lng: 30.41705607}},
		]
	}
];

const RoutesSlices = createSlice({
	name: 'routes',
	initialState: initialState,
	reducers: {
		changeOpenHamburger: (state) => {
			state.openHamburger = !state.openHamburger;
		}
	}
});

const { changeOpenHamburger } = RoutesSlices.actions;

const reducer = RoutesSlices.reducer;

export {
	changeOpenHamburger,
	reducer
}