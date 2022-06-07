import React from 'react';
import ResetButton from 'components/reset-button';
import './ResponseMessage.css';
const ResponseMessage = ({ reset, paymentMethod }) => {
	return (
		<div className='Result'>
			<div className='ResultTitle' role='alert'>
				Payment successful
			</div>
			<div className='ResultMessage'>
				<h5 className='section'>
					Hello {paymentMethod?.billing_details?.name} Thanks for trying Stripe.
				</h5>
				<p className='section'>
					No money was charged, but we generated a PaymentMethod
				</p>
				<p className='section'> ID : {paymentMethod?.id}</p>
			</div>
			<ResetButton onClick={reset} />
		</div>
	);
};

export default ResponseMessage;
