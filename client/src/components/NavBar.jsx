import React from "react";
import "../styles/nav-bar.css";
import FlatButton from "material-ui/RaisedButton";

const NavBar = () => (
	<div className="nav-bar">
		<FlatButton label="New Goal" primary={true} />
	</div>
);

export default NavBar;
