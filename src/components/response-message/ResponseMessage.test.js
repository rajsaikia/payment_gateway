import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import ResponseMessage from './index';

describe('<ResponseMessage /> - Component', () => {
	let container = null;

	const Component = () => {
		return <ResponseMessage />;
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
	it('it should contain the text No money was charged, but we generated a PaymentMethod', async () => {
		expect(
			container.getByText(
				'No money was charged, but we generated a PaymentMethod'
			)
		).toBeInTheDocument();
	});
});
