import React from 'react';
import {useCounter} from './useCounter';

export const CounterComponent = () => {
	const {count, onClick: {increment, decrement}} = useCounter();
	return (
		<>
			<hr/>
			<div className="col s2">
				<button
					className="waves-effect waves-light btn-large blue darken-3"
					onClick={decrement}
				>
					Decrement
				</button>
			</div>
			<div className="col s3">
				<h4>Count: {count}</h4>
			</div>
			<div className="col s2">
				<button
					className="waves-effect waves-light btn-large red accent-3"
					onClick={increment}
				>
					Increment
				</button>
			</div>
		</>
	);
}
