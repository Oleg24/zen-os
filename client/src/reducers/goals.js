import { REQUEST_GOALS, RECEIVE_GOALS } from "../actions/actions";

const goals = (state = { isFetching: false, items: [] }, action) => {
	switch (action.type) {
		case REQUEST_GOALS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_GOALS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.goals,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
};

export default goals;
