import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

const App = () => {
	return (
		<div className="App">
			<Router>
				<div className="container">
					<nav>
						<a href="/">Home</a> | <a href="/shop">Shop</a>
					</nav>
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
