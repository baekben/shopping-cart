import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import Cart from './Cart';
import products from './Products';
import ItemPage from './ItemPage';

const App = () => {
	const [cart, setCart] = useState([]);
	const [displayCart, setDisplayCart] = useState();
	const [totalItems, setTotalItems] = useState(0);
	const [selected, setSelected] = useState({ id: '', img: '', name: '', desc: '' });

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

	const openItem = (e) => {
		let itemId = e.target.id;
		const itemIndex = products.findIndex((x) => x.id === itemId);
		setSelected({
			id: itemId,
			img: products[itemIndex].img,
			name: products[itemIndex].name,
			desc: products[itemIndex].desc,
		});
	};

	const clearCart = () => {
		setCart([]);
		setDisplayCart();
		setTotalItems(0);
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
		console.log(cart);
	}, [cart, totalItems]);
	return (
		<div className="App">
			<Router>
				<div className="container">
					<Nav totalItems={totalItems} />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/shop">
							<Shop products={products} cart={cart} openItem={openItem} />
						</Route>
						<Route exact path="/cart">
							<Cart totalItems={totalItems} displayCart={displayCart} clearCart={clearCart} />
						</Route>
						<Route exact path="/shop/:itemName">
							<ItemPage selected={selected} addItem={addItem} />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
