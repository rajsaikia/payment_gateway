/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Field from './index';

const stripePromise = loadStripe('STRIPE_PUBLISHABLE_API_KEY');

export default {
	title: 'Example/Field',
	component: Field,
	parameters: {
		layout: 'fullscreen',
	},
};

const Template = args => (
	<Elements stripe={stripePromise}>
		<Field
			label='Phone'
			id='phone'
			type='tel'
			placeholder='(941) 555-0123'
			required
			autoComplete='tel'
			value='9897430265'
			onChange={() => {}}
		/>
	</Elements>
);

export const FormField = Template.bind({});
