import {
	REQUEST_GOALS,
	RECEIVE_GOALS,
	REQUEST_SAVE_GOALS,
	RECEIVE_SAVED_GOALS
} from "../actions/actions";

// const goal = (state = {
// 	isSaving: false,
// 	goal: {}
// }, action) =>{
// 	switch (action.type){
// 		case REQUEST_SAVE_GOALS:
// 			return Object.assign({}, state, {
// 				isSaving: true
// 			})
// 		case RECEIVE_SAVED_GOALS:
// 			return Object.assign({}, state, {
// 				isSaving: false,
// 				goals: action.
// 			})

// 	}
// }

const goals = (
	state = { isFetching: false, isSaving: false, items: [] },
	action
) => {
	switch (action.type) {
		case REQUEST_GOALS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_GOALS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.goals
			});
		case REQUEST_SAVE_GOALS:
			return Object.assign({}, state, {
				isSaving: true
			});
		case RECEIVE_SAVED_GOALS:
			return Object.assign({}, state, {
				isSaving: false,
				items: action.goals
			});
		default:
			return state;
	}
};

export default goals;
