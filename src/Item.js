import React from 'react';
import styles from './Item.module.css';

const Item = (props) => {
	return (
		<li className={styles.item} value={props.value} id={props.id} onClick={props.addItem}>
			<img
				className="img-fluid img-thumbnail productImg"
				src={props.image}
				alt={props.id}
				max-height="100"
			/>
			<p>{props.name}</p>
		</li>
	);
};
export default Item;
