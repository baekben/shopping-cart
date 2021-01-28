import React, { useState } from 'react';

const Shop = () => {
	// const [amount, setAmount] = useState(1);
	// const [price, setPrice] = useState(0);
	const [cart, setCart] = useState([]);

	const addItem = (e) => {
		let itemName = e.target.id;

		const { length } = cart;
		const id = length + 1;
		const found = cart.some((e) => e.name === itemName);
		if (!found) {
			setCart([...cart, { id, name: itemName, amount: 1 }]);
		} else {
			const updateCart = cart.map((item) => (item.id === id ? { ...item, amount: +1 } : item));
			setCart(updateCart);
			// let index = cart.findIndex((x) => x.name === itemName);
			// cart[index].amount++;
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
				<div>
					Cart:
					<ul>
						{cart.map((e) => (
							<li key={e.id}>
								{e.name} | {e.amount}
							</li>
						))}
					</ul>
				</div>
				<p>StickBar: </p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default Shop;
