import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import CardField from './index';

describe('<CardField /> - Component', () => {
	let container = null;

	const Component = () => {
		return <CardField onChange={() => {}} />;
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
