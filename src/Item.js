import React from 'react';

const Item = (props) => {
	return (
		<li value={props.value} id={props.id} onClick={props.addItem}>
			<img
				className="img-fluid productImg"
				src={props.image}
				alt={props.id}
				width="200"
				height="100"
			/>
			{props.name}
		</li>
	);
};
export default Item;
