import React from 'react';
import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
	const { name, value, id, openItem, image, price } = props;
	return (
		<Link to={`/shop/${name}`}>
			<li className={styles.content} value={value} id={id} onClick={openItem}>
				<div className="text-center">
					<img
						className={styles.productImg + ' img-thumbnail img-rounded'}
						id={id}
						src={image}
						alt={id}
					/>
				</div>
				<div className="row">
					<p className="col text-dark" id={id}>
						{name}
					</p>
					<p className="col text-end text-dark">{price}</p>
				</div>
			</li>
		</Link>
	);
};
export default Item;
