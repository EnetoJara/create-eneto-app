import React, { Component } from 'react';

import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar';
class App extends Component {
	state = {
		open: true,
	};
	render = () => {
		return (
			<React.Fragment>
				<Header />
				<Sidebar />
			</React.Fragment>
		);
	};
}

export default App;
