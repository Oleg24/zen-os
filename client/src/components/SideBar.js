import React, { Component } from "react";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import appConstants from "../constants/app-constants";
import { Link } from "react-router-dom";
import "../styles/side-bar.css";

const SideBarItem = ({ icon, selectItem, name }) => {
	return (
		<div className="side-bar__item" onClick={() => selectItem(name)}>
			{icon}
		</div>
	);
};

class SideBar extends Component {
	selectItem(item) {
		console.log("clicking item", item);
	}

	render() {
		return (
			<div className="side-bar">
				<Link to="/newgoal">
					<Button
						fab
						mini
						color="primary"
						aria-label="add"
						className="side-bar__item"
					>
						<AddIcon />
					</Button>
				</Link>
				{appConstants.sideBarItems.map(item => {
					return (
						<SideBarItem
							key={item.name}
							{...item}
							selectItem={this.selectItem}
						/>
					);
				})}
			</div>
		);
	}
}

export default SideBar;
