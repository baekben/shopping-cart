import React from 'react';
import styles from './ItemPage.module.css';

const ItemPage = (props) => {
	const { selected, addItem } = props;
	return (
		<div className={styles.contents}>
			<h1>Item Name</h1>
			<img src={selected.img} className={styles.itemImg} alt={selected.id} />
			<p>description</p>
			<button onClick={addItem}>Add Item</button>
			<p>quantity</p>
			<p>textbox</p>
			<button>plug</button>
			<button>minus</button>
		</div>
	);
};

export default ItemPage;
