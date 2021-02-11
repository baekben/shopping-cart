import React from 'react';
import Item from './Item';
import styles from './Shop.module.css';

const Shop = (props) => {
	const { addItem, products } = props;
	return (
		<div className="shop">
			<h1>This is the Shop page</h1>
			<div id="items">
				<ul className={styles.itemBoard}>
					{products.map((item) => (
						<Item
							key={item.id}
							value={item.value}
							id={item.id}
							addItem={addItem}
							name={item.name}
							image={item.img}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Shop;
