import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-mdl/extra/css/material.yellow-light_green.min.css";
import "react-mdl/extra/material.js";

import * as serviceWorker from "./serviceWorker";
import App from "./containers/App";
import rootSagas from "./redux/sagas";
import Store from "./redux/store";

export class CreateEnetoApp {
	constructor () {
		this.store = null;
	}

	init = () =>
		Store.then((res) => {
			this.store = res;
			this.store.runSaga(rootSagas);
			ReactDOM.render(
				this.renderApp(this.store),
				document.getElementById("root")
			);
		});

	renderApp (theStore) {
		return (
			<Provider store={theStore}>
				<CssBaseline />
				<App />
			</Provider>
		);
	}
}
const app = new CreateEnetoApp();
app.init();
serviceWorker.unregister();
