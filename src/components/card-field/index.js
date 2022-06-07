import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import CARD_OPTIONS from 'utils/card-option';
import './CardField.css';
const CardField = ({ onChange }) => (
	<div className='FormRow'>
		<CardElement options={CARD_OPTIONS} onChange={onChange} />
	</div>
);

export default CardField;
