import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/shop');
	};
	return (
		<div className={styles.home}>
			<p className={styles.header}>Fresh Kicks</p>
			<button className="btn btn-secondary btn-lg " onClick={handleClick} type="button">
				Go Shop
			</button>
		</div>
	);
};

export default Home;
