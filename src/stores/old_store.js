// initial state
const initialStoreState = {
	counter: 0,
	imBusy: false
}

// ACTIONS TYPES
const ADD = 'ADD'
const SUBTRACT = 'SUBTRACT'
const RESET = 'RESET'

// ACTIONS
function add(payload=1) {
	return { 
		type: ADD, 
		payload 
	}
}
function subtract(payload=1) {
	return { type: SUBTRACT, payload }
}
function reset() {
	return { type: RESET }
}

const actions = { add, subtract, reset }

// reducer
function countReducer(state = initialStoreState, action) {
	switch (action.type) {
		case ADD:
			return {
				...state,
				counter: state.counter + action.payload
			}
		case SUBTRACT:
			return {
				...state,
				counter: state.counter - action.payload
			}

		case RESET:
			return {
				...state,
				counter: 0
			}
		default:
			return { ...state }
	}
}


export { actions, countReducer }
