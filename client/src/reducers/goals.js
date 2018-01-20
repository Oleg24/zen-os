import tempGoals from "../constants/temp-data";

const goals = (state = tempGoals.goals, action) => {
	switch (action.type) {
		case "ADD_GOAL":
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					description: action.description,
					outcome: action.outcome
				}
			];
		default:
			return state;
	}
};

export default goals;
