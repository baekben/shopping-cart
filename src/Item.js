import React from 'react';

const Item = (props) => {
	return (
		<li value={props.value} id={props.id} onClick={props.handleItem}>
			{props.name}
		</li>
	);
};
export default Item;
