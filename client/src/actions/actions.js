import fetch from "cross-fetch";
export const REQUEST_GOALS = "REQUEST_GOALS";
export const RECEIVE_GOALS = "RECEIVE_GOALS";

export const requestGoals = () => {
	return {
		type: REQUEST_GOALS
	};
};

export const receiveGoals = json => {
	return {
		type: RECEIVE_GOALS,
		receivedAt: Date.now(),
		goals: json
	};
};

export function fetchGoals() {
	return function(dispatch) {
		dispatch(requestGoals());

		return fetch("/api/goals")
			.then(
				response => response.json(),
				error => console.log("an error occurred", error)
			)
			.then(json => dispatch(receiveGoals(json)));
	};
}
