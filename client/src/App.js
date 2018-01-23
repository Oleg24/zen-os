import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Grid from "material-ui/Grid";
import GoalsContainer from "./containers/Goals-Container";
import "./App.css";

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <div className="app-container">
            <SideBar />
            <GoalsContainer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
