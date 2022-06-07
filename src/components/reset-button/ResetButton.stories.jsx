/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import ResetButton from './index';

export default {
	title: 'Example/ResetButton',
	component: ResetButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const Template = args => <ResetButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'ResetButton',
};
