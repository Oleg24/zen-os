import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import GoalsContainer from "./containers/Goals-Container";
import NewGoal from "./components/NewGoal";

const RootRouter = () => (
	<Switch>
		<Route exact path="/" component={GoalsContainer} />
		<Route path="/newgoal" component={NewGoal} />
	</Switch>
);

export default RootRouter;
