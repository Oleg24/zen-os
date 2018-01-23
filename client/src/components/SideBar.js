import React, { Component } from "react";
import appConstants from "../constants/app-constants";
import "../styles/side-bar.css";

// <i class="material-icons">face</i>

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
