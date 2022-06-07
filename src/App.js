import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/checkout-form';
import ELEMENTS_OPTIONS from 'utils/element-option';
import StripePromise from 'utils/stripe-promise';
import './App.css';

const App = () => {
	return (
		<div className='AppWrapper'>
			<h4 className='centerAlign'>Payment Gateway</h4>
			<Elements stripe={StripePromise} options={ELEMENTS_OPTIONS}>
				<CheckoutForm />
			</Elements>
		</div>
	);
};

export default App;
