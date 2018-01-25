import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import GoalCard from "./GoalCard";
import "../styles/goal-card.css";

const styles = {
	card: {
		display: "flex",
		justifyContent: "center"
	}
};

export default class GoalsList extends Component {
	static propTypes = {};

	static defaultProps = {
		isFetching: true,
		loadingLabel: "Loading goals..."
	};

	render() {
		const { isFetching, items, loadingLabel } = this.props;

		const isEmpty = items.length === 0;
		if (isEmpty && isFetching) {
			return (
				<h2>
					<i>{loadingLabel}</i>
				</h2>
			);
		}

		return (
			<div>
				<Grid className="goals-container" container spacing={16}>
					{items.map(goal => (
						<Grid item style={styles.card} key={goal._id}>
							<GoalCard {...goal} />
						</Grid>
					))}
				</Grid>
			</div>
		);
	}
}
