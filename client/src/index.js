import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from "react-redux";
import goalsApp from "./reducers";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

injectTapEventPlugin();
let store = createStore(goalsApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
