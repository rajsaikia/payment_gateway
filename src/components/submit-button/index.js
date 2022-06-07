import React from 'react';
import './SubmitButton.css';
const SubmitButton = ({ processing, error, children, disabled }) => {
	return (
		<button
			className={`SubmitButton ${error ? 'SubmitButton--error' : ''}`}
			type='submit'
			disabled={processing || disabled}
		>
			{processing ? 'Processing...' : children}
		</button>
	);
};

export default SubmitButton;
