import React, { Component } from "react";
import {
	Card,
	CardActions,
	CardHeader,
	CardTitle,
	CardText
} from "material-ui/Card";
import "../styles/goal-card.css";

class GoalCard extends Component {
	render() {
		return (
			<Card>
				<CardHeader title={this.props.title} />
				<CardText>Goal Description {this.props.description}</CardText>
				<CardText>Goal Outcome {this.props.outcome}</CardText>
			</Card>
		);
	}
}

export default GoalCard;
