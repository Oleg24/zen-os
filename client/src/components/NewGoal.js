import React, { Component } from "react";
import { TextField, Input, FormLabel } from "material-ui";

const styles = {
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 20
	},
	form: {
		display: "flex",
		flexDirection: "column"
	}
};

class NewGoal extends Component {
	state = {
		title: "",
		description: "",
		outcomes: ""
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	render() {
		return (
			<div style={styles.container}>
				<form style={styles.form} noValidate autoComplete="off">
					<FormLabel>New Goal</FormLabel>
					<TextField
						id="goal-title"
						label="Title"
						value={this.state.title}
						onChange={this.handleChange("title")}
						margin="normal"
					/>
					<TextField
						id="goal-description"
						label="Description"
						value={this.state.description}
						onChange={this.handleChange("description")}
						margin="normal"
					/>
					<TextField
						id="goal-outcomes"
						label="Outcome"
						value={this.state.outcomes}
						onChange={this.handleChange("outcomes")}
						margin="normal"
					/>
				</form>
			</div>
		);
	}
}

export default NewGoal;
