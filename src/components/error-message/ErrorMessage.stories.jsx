/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import ErrorMessage from './index';

export default {
	title: 'Example/ErrorMessage',
	component: ErrorMessage,
	parameters: {
		layout: 'fullscreen',
	},
};
const error = {
	message: 'custom error message',
};
const Template = args => <ErrorMessage>{error.message}</ErrorMessage>;

export const Error = Template.bind({});
