import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppConstants from "./constants/app-constants";
import AppBar from "material-ui/AppBar";
import NavBar from "./components/NavBar";
import Divider from "material-ui/Divider";
import GoalsContainer from "./containers/Goals-Container";

import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title={AppConstants.appBar.title}
            iconClassNameLeft={AppConstants.appBar.leftIcon}
          />
          <NavBar />
          <Divider />
          <GoalsContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
