import React from 'react';

import Item from './Item';
import styles from './Shop.module.css';

const Shop = (props) => {
	const { openItem, products } = props;
	return (
		<div className="shop">
			<h1>Kicks</h1>
			<div id="items">
				<ul className={styles.itemBoard}>
					{products.map((item) => (
						<Item
							key={item.id}
							value={item.value}
							id={item.id}
							openItem={openItem}
							name={item.name}
							image={item.img}
							price={item.price}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Shop;
