import React, { Component } from "react";
import { connect } from "react-redux";
import GoalCard from "../components/GoalCard";

const GoalsList = ({ goals }) => (
	<div>{goals.map(goal => <GoalCard key={goal.id} {...goal} />)}</div>
);

const mapStateToProps = state => {
	return {
		goals: state.goals
	};
};

const GoalsContainer = connect(mapStateToProps)(GoalsList);

export default GoalsContainer;
