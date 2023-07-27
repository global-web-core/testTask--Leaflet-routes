import {createSlice} from '@reduxjs/toolkit';

const initialState = {entities: null, status: 'idle', error: null};

const PolylinesSlices = createSlice({
	name: 'polylines',
	initialState: initialState,
	reducers: {
		set: (state, action) => {
      state.status = 'idle';
      state.entities = action.payload;
      state.error = null;
		},
		error: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
		},
	}
});

const {set,error} = PolylinesSlices.actions;

const reducer = PolylinesSlices.reducer;

export {
	set,
  error,
	reducer
}