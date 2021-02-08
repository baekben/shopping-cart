import React from 'react';

const Cart = (props) => {
	const { totalItems, displayCart } = props;
	return (
		<div>
			<div>
				Cart: {totalItems}
				<ul className="cart">{displayCart}</ul>
			</div>
			<button>Checkout</button>
		</div>
	);
};

export default Cart;
