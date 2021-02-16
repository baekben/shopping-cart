import freeRn from './img/freeRunNike.jpg';
import pastelNike from './img/pastelAirForceNike.jpg';
import pastelNB from './img/pastelNewBalance.jpg';
import whiteSAF from './img/whiteswooshAFNike.jpg';
import ybNike from './img/yellow+blackNike.jpg';
const products = [
	{
		id: 'one',
		value: 1,
		name: 'Free Run Nike',
		img: freeRn,
		desc: 'Light weight red running shoe from Nike',
		price: '$62'
	},
	{
		id: 'two',
		value: 2,
		name: 'Pastel Air Force Nike',
		img: pastelNike,
		desc: "Classic Air Force 1's in a pastel colorway",
		price: '$95'
	},
	{
		id: 'three',
		value: 3,
		name: 'Pastel New Balance',
		img: pastelNB,
		desc: 'Pastel colorway from New Balance',
		price: '$70'
	},
	{
		id: 'four',
		value: 4,
		name: 'White Air Force w/Black Outer',
		img: whiteSAF,
		desc: "Air Force 1's with some black and red mixed in",
		price: '$89'
	},
	{
		id: 'five',
		value: 5,
		name: 'Jordan 1 (Yellow/Black)',
		img: ybNike,
		desc: "Jordan 1's in a yellow and black colorway",
		price: '$97'
	},
];

export default products;
