import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/shop');
	};
	return (
		<div className="container home">
			<h1>This is the Home page</h1>
			<button onClick={handleClick} type="button">
				Go Shop
			</button>
		</div>
	);
};

export default Home;
