import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import Field from './index';

describe('<Field /> - Component', () => {
	let container = null;

	const Component = () => {
		return (
			<Field
				label='Name'
				id='name'
				type='text'
				placeholder='Jane Doe'
				required
				autoComplete='name'
				value='Jane Doe'
				onChange={() => {}}
			/>
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
	it('it should contain the text Name', async () => {
		expect(container.getByText('Name')).toBeInTheDocument();
	});
	it('it should contain the value Jane Doe', async () => {
		expect(container.getByLabelText('Name')).toHaveValue('Jane Doe');
	});
});
