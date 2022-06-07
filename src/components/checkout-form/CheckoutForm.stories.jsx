/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './index';
import '../../App.css';

export default {
	title: 'Example/CheckoutForm',
	component: CheckoutForm,
	parameters: {
		layout: 'fullscreen',
	},
};

const ELEMENTS_OPTIONS = {
	fonts: [
		{
			cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
		},
	],
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Template = args => (
	<Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
		<CheckoutForm />
	</Elements>
);

export const Form = Template.bind({});
