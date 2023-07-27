import {createSlice} from '@reduxjs/toolkit';

const initialState = {data: null};

const SelectedRouteSlices = createSlice({
	name: 'selectedRoute',
	initialState: initialState,
	reducers: {
		set: (state, action) => {
			state.data = action.payload;
		},
	}
});

const {set} = SelectedRouteSlices.actions;

const reducer = SelectedRouteSlices.reducer;

export {
	set,
	reducer
}