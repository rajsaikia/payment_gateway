import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import SubmitButton from './index';

describe('<SubmitButton /> - Component', () => {
	let container = null;

	const Component = () => {
		return (
			<SubmitButton processing={false} error={false} disabled={!true}>
				Pay $25
			</SubmitButton>
		);
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
	it('it should contain the text Pay $25', async () => {
		expect(container.getByText('Pay $25')).toBeInTheDocument();
	});
});
