import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {CounterComponent} from '../couneter';


describe('testing component CounterComponent', () => {
	beforeEach(() => {
		render(
			<CounterComponent />
		);
	})

	it('ferst render component', () => {
		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});

	it('event click button incriment', () => {
		fireEvent.click(screen.getByRole('button', {name: 'Increment'}));
		expect(screen.getByText("Count: 1")).toBeInTheDocument();
	});

	it('event click button Decrement', () => {
		fireEvent.click(screen.getByRole('button', {name: 'Decrement'}));
		expect(screen.getByText("Count: -1")).toBeInTheDocument();
	});
})
