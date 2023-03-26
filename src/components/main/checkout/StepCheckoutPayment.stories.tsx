import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StepCheckoutPayment, { props } from './StepCheckoutPayment';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/StepCheckoutPayment',
  component: StepCheckoutPayment,
} as Meta;

const Template: StoryFn<props> = (args) => <StepCheckoutPayment {...args} />;

export const Default = Template.bind({});