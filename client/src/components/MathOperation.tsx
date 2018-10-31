import React from 'react';

interface AddProps {
	operation: string;
	a: number;
	b: number;
}

const currentOp = (operation: string, a: number, b: number) => {
	switch (true) {
		case operation.toLowerCase() === 'addition':
			return a + b;
			break;
		case operation.toLowerCase() === 'subtraction':
			return a - b;
			break;
		case operation.toLowerCase() === 'multiplication':
			return a * b;
			break;
		case operation.toLowerCase() === 'division':
			return a / b;
			break;
		default:
			return '';
			break;
	}
}

function Add({ operation, a, b}: AddProps) {
	return (
		<div>
			<h4>{operation}</h4>
			<p>{currentOp(operation, a, b)}</p>
			<span>**************************</span>
		</div>
	)
}

export default Add;
