import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from "react-redux";
import goalsApp from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const loggerMiddleware = createLogger();

injectTapEventPlugin();
let store = createStore(goalsApp, applyMiddleware(thunk, loggerMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();

