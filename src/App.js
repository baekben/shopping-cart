import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Nav from './Nav';

const App = () => {
	return (
		<div className="App">
			<Router>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/shop" component={Shop} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
