import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import ResetButton from './index';

describe('<ResetButton /> - Component', () => {
	let container = null;

	const Component = () => {
		return <ResetButton />;
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
});
