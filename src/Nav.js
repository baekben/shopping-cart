import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';

const Nav = (props) => {
	const { totalItems } = props;
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					Brand Name
				</a>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link active" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link " to="/shop">
							Shop
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link " to="/about">
							About{' '}
						</Link>
					</li>
					<li className="nav-item">
						<Badge
							badgeContent={totalItems}
							color="primary"
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							showZero>
							<Link className="nav-link " to="cart">
								Cart{' '}
							</Link>
						</Badge>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
