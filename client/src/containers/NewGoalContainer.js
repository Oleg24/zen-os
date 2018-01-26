import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveGoals } from "../actions/actions";
import NewGoal from "../components/NewGoal";

class NewGoalContainer extends Component {
	static propTypes = {};

	render() {
		const onSubmit = this.props.saveGoal;
		return <NewGoal onSubmit={onSubmit} />;
	}
}

const mapStateToProps = state => {
	return {
		isSaving: state.isSaving
	};
};

const mapDispatchToProps = dispatch => {
	return {
		saveGoal: goal => {
			dispatch(saveGoals(goal));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGoalContainer);
