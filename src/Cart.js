import React from 'react';

const Cart = (props) => {
	return (
		<div>
			<div>
				Cart: {props.totalItems}
				<ul className="cart">{props.displayCart}</ul>
			</div>
			<button>Checkout</button>
		</div>
	);
};

export default Cart;
