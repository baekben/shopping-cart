import React, { useState } from 'react';
import styles from './ItemPage.module.css';

const ItemPage = (props) => {
	const { selected, addItem } = props;
	const [qty, setQty] = useState(0);

	const addCount = () => {
		setQty(qty + 1);
	};

	const subtractCount = () => {
		if (qty === 0) {
			return;
		}
		setQty(qty - 1);
	};

	return (
		<div className={styles.contents}>
			<h1>{selected.name}</h1>
			<img src={selected.img} className={styles.itemImg} alt={selected.id} />
			<p>{selected.desc}</p>
			<p>quantity</p>
			<p>{qty}</p>
			<button className="btn btn-secondary" onClick={addCount}>
				+
			</button>
			<button className="btn btn-secondary" onClick={subtractCount} value="-">
				-
			</button>
			<button id={selected.name} className="btn btn-primary" onClick={addItem}>
				Add Item
			</button>
		</div>
	);
};

export default ItemPage;
