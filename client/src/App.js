import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import GoalsContainer from "./containers/Goals-Container";
import RootRouter from "./RootRouter";
import "./App.css";

const theme = createMuiTheme();

class App extends Component {
  render() {
    console.log(this.props.children);
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <Router>
            <div className="app-container">
              <SideBar />
              <RootRouter />
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
