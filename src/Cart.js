import React from 'react';
import styles from './Cart.module.css';

const Cart = (props) => {
	const { totalItems, displayCart, clearCart } = props;
	return (
		<div className={styles.fill}>
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
