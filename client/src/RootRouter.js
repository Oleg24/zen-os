import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import GoalsContainer from "./containers/GoalsContainer";
import NewGoalContainer from "./containers/NewGoalContainer";

const RootRouter = () => (
	<Switch>
		<Route exact path="/" component={GoalsContainer} />
		<Route exact path="/newgoal" component={NewGoalContainer} />
	</Switch>
);

export default RootRouter;
