import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StepCheckoutQuantity, { props } from './StepCheckoutQuantity';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/StepCheckoutQuantity',
  component: StepCheckoutQuantity,
} as Meta;

const Template: StoryFn<props> = (args) => <StepCheckoutQuantity {...args} />;

export const Default = Template.bind({});