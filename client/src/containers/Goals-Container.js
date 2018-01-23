import React from "react";
import { connect } from "react-redux";
import GoalCard from "../components/GoalCard";
import { fetchGoals } from "../actions/actions";
import Grid from "material-ui/Grid";
import "../styles/goal-card.css";

const styles = {
	root: {
		flexGrow: 1
	},
	card: {
		display: "flex",
		justifyContent: "center"
	}
};

const GoalsList = ({ goals, fetchGoals }) => (
	<div style={styles.root}>
		<Grid
			className="goals-container"
			container
			spacing={8}
			justify={"space-around"}
		>
			{goals.items.map(goal => (
				<Grid item style={styles.card} xs={12} sm={3} key={goal.id}>
					<GoalCard {...goal} />
				</Grid>
			))}
		</Grid>
	</div>
);

const mapStateToProps = state => {
	return {
		goals: state.goals
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchGoals: () => {
			dispatch(fetchGoals());
		}
	};
};

const GoalsContainer = connect(mapStateToProps, mapDispatchToProps)(GoalsList);

export default GoalsContainer;
