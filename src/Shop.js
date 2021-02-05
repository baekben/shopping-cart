import React, { useEffect, useState } from 'react';

const Shop = () => {
	const [cart, setCart] = useState([]);
	const [displayCart, setDisplayCart] = useState();
	const [totalItems, setTotalItems] = useState(0);

	const handleItem = (e) => {
		addItem(e);
	};

	const addItem = (e) => {
		let itemName = e.target.id;
		console.log(itemName);

		const found = cart.some((e) => e.name === itemName);
		if (!found) {
			const length = cart.length;
			const id = length + 1;
			if (length === 0) {
				setCart([{ id, name: itemName, amount: 1 }]);
			} else {
				setCart([...cart, { id, name: itemName, amount: 1 }]);
			}
		} else {
			const updateCart = cart.map((item) =>
				item.name === itemName ? { ...item, amount: item.amount + 1 } : item
			);
			setCart(updateCart);
		}
	};

	useEffect(() => {
		setDisplayCart(
			cart.map((e) => (
				<li key={e.id} id={e.id}>
					{e.name} | {e.amount}
				</li>
			))
		);
		const itemNum = cart.reduce(function (prev, cur) {
			return prev + cur.amount;
		}, 0);
		setTotalItems(itemNum);
	}, [cart, totalItems]);

	return (
		<div className="shop">
			<h1>This is the Shop page</h1>
			<div id="items">
				<ul>
					<li value="1" id="one" onClick={handleItem}>
						item one
					</li>
					<li value="2" id="two" onClick={handleItem}>
						item two
					</li>
					<li value="3" id="three" onClick={handleItem}>
						item three
					</li>
				</ul>
			</div>
			<div>
				<div>
					Cart: {totalItems}
					<ul className="cart">{displayCart}</ul>
				</div>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default Shop;
