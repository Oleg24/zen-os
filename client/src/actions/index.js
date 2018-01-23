import { TOGGLE_GOALS_MODAL } from "./action-types";

export const toggleGoalsModal = modal => {
	return {
		type: TOGGLE_GOALS_MODAL,
		modal
	};
};
