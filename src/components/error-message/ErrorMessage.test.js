import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import ErrorMessage from './index';

describe('<ErrorMessage /> - Component', () => {
	let container = null;
	const error = {
		message: 'Custom Error Message',
	};

	const Component = () => {
		return <ErrorMessage>{error.message}</ErrorMessage>;
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
	it('it should contain the text error message', async () => {
		expect(container.getByText('Custom Error Message')).toBeInTheDocument();
	});
});
