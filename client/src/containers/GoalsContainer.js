import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchGoals } from "../actions/actions";
import GoalsList from "../components/GoalsList";

const styles = {
	root: {
		flexGrow: 1
	}
};

class GoalsContainer extends Component {
	static propTypes = {};

	componentWillMount() {
		if (!this.props.goals.length) {
			this.props.fetchGoals();
		}
	}

	render() {
		const { goals } = this.props;
		return (
			<div style={styles.root}>
				<GoalsList items={goals.items} {...goals} />
			</div>
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer);
