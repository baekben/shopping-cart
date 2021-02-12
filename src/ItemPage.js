import React from 'react';
import styles from './ItemPage.module.css';

const ItemPage = (props) => {
	const { selected, addItem } = props;
	return (
		<div className={styles.contents}>
			<h1>{selected.name}</h1>
			<img src={selected.img} className={styles.itemImg} alt={selected.id} />
			<p>{selected.desc}</p>
			<button onClick={addItem}>Add Item</button>
			<p>quantity</p>
			<p>textbox</p>
			<button>plus</button>
			<button>minus</button>
		</div>
	);
};

export default ItemPage;
