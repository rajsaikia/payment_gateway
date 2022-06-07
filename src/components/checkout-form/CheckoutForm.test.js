import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import CheckoutForm from './index';

describe('<CheckoutForm /> - Component', () => {
	let container = null;

	const Component = () => {
		return <CheckoutForm />;
	};
	beforeEach(async () => {
		container = render(<Component />);
	});

	afterEach(() => {
		container.unmount();
	});
	it('renders correctly', async () => {
		expect(container.asFragment()).toMatchSnapshot();
	});
	it('it should contain the text Name', async () => {
		expect(container.getByText('Name')).toBeInTheDocument();
	});
	it('it should contain the text Email', async () => {
		expect(container.getByText('Email')).toBeInTheDocument();
	});
	it('it should contain the text Phone', async () => {
		expect(container.getByText('Phone')).toBeInTheDocument();
	});
	it('it should contain the text Pay $25', async () => {
		expect(container.getByText('Pay $25')).toBeInTheDocument();
	});
});
