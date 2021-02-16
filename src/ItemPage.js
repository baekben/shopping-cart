import React, { useState } from 'react';
import styles from './ItemPage.module.css';

const ItemPage = (props) => {
	const { selected, addItem } = props;
	const [qty, setQty] = useState(1);

	const addCount = () => {
		setQty(qty + 1);
	};

	const subtractCount = () => {
		if (qty === 1) {
			return;
		}
		setQty(qty - 1);
	};

	const handleQty = (e) => {
		setQty(parseInt(e.target.value, 10));
	};

	return (
		<div className={styles.contents}>
			<h1>{selected.name}</h1>
			<img src={selected.img} className={styles.itemImg} alt={selected.id} />
			<p>{selected.desc}</p>
			<div className="form-group w-25">
				<label>
					Quantity:
					<input
						type="text"
						className="form-control"
						id="quantity"
						value={qty}
						onChange={handleQty}></input>
				</label>
			</div>
			<div>
				<button className="btn btn-secondary mx-auto" onClick={addCount}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-plus-circle"
						viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
					</svg>
				</button>
				<button className="btn btn-secondary mx-auto" onClick={subtractCount} value="-">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-dash-circle"
						viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
					</svg>
				</button>
			</div>
			<button id={selected.name} className="btn btn-primary m-3" onClick={(e) => addItem(e, qty)}>
				Add Item
			</button>
		</div>
	);
};

export default ItemPage;
