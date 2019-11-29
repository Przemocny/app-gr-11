import { createSlice } from '@reduxjs/toolkit'

const {actions, reducer} = createSlice({
	name: 'counter',
	
	initialState: { counter: 0, imBusy:false },

	reducers: {
		add(state, action) {
			state.counter += action.payload
		},
		subtract(state, action) {
			state.counter -= action.payload
		},
		reset(state, action) {
			state.counter = 0
		}
	}
})

export const { add, subtract, reset } = actions

export default reducer
