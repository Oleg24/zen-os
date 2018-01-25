import React, { Component } from "react";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import "../styles/goal-card.css";

class GoalCard extends Component {
	render() {
		return (
			<Paper className="goal-card">
				<div className="goal-card__title">{this.props.title}</div>
				<Divider />
				<div className="goal-card__text">
					<span className="label left">Goal - </span>
					{this.props.description}
				</div>
				<div className="goal-card__text">
					<span className="label left">Outcome - </span>
					{this.props.outcomes}
				</div>
			</Paper>
		);
	}
}

export default GoalCard;
