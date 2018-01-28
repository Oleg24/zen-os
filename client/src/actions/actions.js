import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import history from "../history";
export const REQUEST_GOALS = "REQUEST_GOALS";
export const RECEIVE_GOALS = "RECEIVE_GOALS";
export const REQUEST_SAVE_GOALS = "REQUEST_SAVE_GOALS";
export const RECEIVE_SAVED_GOALS = "RECEIVE_SAVED_GOALS";

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

		return axios
			.get("/api/goals")
			.then(
				response => response.data,
				error => console.log("an error occurred", error)
			)
			.then(response => dispatch(receiveGoals(response)));
	};
}

export const startSave = () => {
	return {
		type: REQUEST_SAVE_GOALS
	};
};

export const receiveSavedGoal = json => {
	return {
		type: RECEIVE_SAVED_GOALS,
		goals: json
	};
};

export function saveGoals(goal) {
	return function(dispatch) {
		dispatch(startSave());

		return axios
			.post("/api/goals", goal)
			.then(
				response => response.data,
				error => console.log("an error occured while saving", error)
			)
			.then(response => {
				history.push("/");
				return dispatch(receiveGoals(response));
			});
	};
}
