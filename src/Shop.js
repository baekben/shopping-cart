import React, { useState } from 'react';

const Shop = () => {
	// const [amount, setAmount] = useState(1);
	// const [price, setPrice] = useState(0);
	const [cart, setCart] = useState({});

	// const getIndex = (name) => {
	// 	for (let i = 0; i < cart.length; i++) {
	// 		if (cart[i][name] === name) {
	// 			return i;
	// 		}
	// 	}
	// };

	const addItem = (e) => {
		let itemName = e.target.id;
		const itemInfo = {
			name: itemName,
			amount: 1,
		};
		if (!cart[itemName]) {
			setCart({ ...cart, [itemName]: itemInfo });
		} else {
			cart[itemName].amount++;
		}
	};

	return (
		<div className="shop">
			<h1>This is the Shop page</h1>
			<div id="items">
				<ul>
					<li value="1" id="one" onClick={addItem}>
						item one
					</li>
					<li value="2" id="two" onClick={addItem}>
						item two
					</li>
					<li value="3" id="three" onClick={addItem}>
						item three
					</li>
				</ul>
			</div>
			<div>
				<p>Cart: </p>
				<p>StickBar: </p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default Shop;
