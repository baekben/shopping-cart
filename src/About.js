import React from 'react';
import hangingShoes from './img/hangingShoes.jpg';
import streetProfile from './img/streetpic.jpg';

const About = () => {
	return (
		<div>
			<h1>About</h1>
			<div>
				<p>Welcome to Fresh Kicks</p>
				<p>
					Started in during the Covid-19 pandemic of 2020. We wanted to allow an affordable place of
					people to enjoy shoes at home.
				</p>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<img src={hangingShoes} className="img-responsive" alt="Shoes hanging over ledge"></img>
				</div>
				<div className="col-sm-4">
					<img
						src={streetProfile}
						className="img-responsive"
						alt="Street profile by building"></img>
				</div>
			</div>
		</div>
	);
};

export default About;
