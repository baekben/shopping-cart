import React from 'react';

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					Brand Name
				</a>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link active" href="/">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/shop">
							Shop
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Cart
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
