/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import ResponseMessage from './index';
const stripePromise = loadStripe('STRIPE_PUBLISHABLE_API_KEY');

const paymentMethod = {
	billing_details: {
		name: 'Raj Saikia',
	},
	id: 'pm_1L7taLSJmzuewtHPvleBJm3e',
};

export default {
	title: 'Example/ResponseMessage',
	component: ResponseMessage,
	parameters: {
		layout: 'fullscreen',
	},
};

const Template = args => (
	<Elements stripe={stripePromise}>
		<ResponseMessage reset={() => {}} paymentMethod={paymentMethod} />
	</Elements>
);

export const Message = Template.bind({});
