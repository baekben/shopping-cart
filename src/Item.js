import React from 'react';
import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
	return (
		<Link to={`/shop/${props.name}`}>
			<li className={styles.item} value={props.value} id={props.id} onClick={props.openItem}>
				<img
					className={styles.productImg + ' img-thumbnail'}
					id={props.id}
					src={props.image}
					alt={props.id}
				/>
				<p id={props.id}>{props.name}</p>
			</li>
		</Link>
	);
};
export default Item;
