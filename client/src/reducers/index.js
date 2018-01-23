import { combineReducers } from "redux";
import goals from "./goals";

console.log(goals);

const goalsApp = combineReducers({
	goals
});

export default goalsApp;
