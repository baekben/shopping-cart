import React from 'react';

const Cart = (props) => {
	const { totalItems, displayCart, clearCart } = props;
	return (
		<div>
			<div>
				Number of Items: {totalItems}
				<ul className="cart">{displayCart}</ul>
			</div>
			<button>Checkout</button>
			<button onClick={clearCart}>Clear Cart</button>
		</div>
	);
};

export default Cart;
