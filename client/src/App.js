import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar";
import RootRouter from "./RootRouter";
import "./App.css";

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="align-center">
          <NavBar />
          <Router>
            <div className="app">
              <SideBar />
              <div className="app-container">
                <RootRouter />
              </div>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
