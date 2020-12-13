import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Offline, Online } from 'react-detect-offline';
import Home from '../components/home/component/home';

class AppRoutes extends React.Component {
	render() {
		return (
			<>
				<Online>
					<Router>
						<Switch>
							<Route path="/" component={Home}></Route>
						</Switch>
					</Router>
				</Online>
				<Offline>
					<div className="no-internet-container">
						<div>
							<h1>No Internet !!!</h1>
							<h6>Please check you Internet connection</h6>
						</div>
					</div>
				</Offline>
			</>
		);
	}
}

export default AppRoutes;
