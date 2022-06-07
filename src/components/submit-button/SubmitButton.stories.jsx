/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import SubmitButton from './index';
import '../../App.css';

export default {
	title: 'Example/SubmitButton',
	component: SubmitButton,
};

const Template = args => <SubmitButton {...args}>Pay $25</SubmitButton>;

export const Primary = Template.bind({});
Primary.args = {
	processing: false,
	error: false,
	stripe: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
	processing: true,
	error: true,
	stripe: false,
};
