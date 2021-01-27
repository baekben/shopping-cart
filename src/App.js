import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

const App = () => {
	return (
		<div className="App">
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/shop">Shop</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/shop" component={Shop} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
