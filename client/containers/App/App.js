import React, { Component } from "react";

import "./App.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar";
class App extends Component {
	render = () => (
		<React.Fragment>
			<Header />
			<Sidebar />
		</React.Fragment>
	);
}

export default App;
