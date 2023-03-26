import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StepCheckoutTickets, { props } from './StepCheckoutTickets';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/StepCheckoutTickets',
  component: StepCheckoutTickets,
} as Meta;

const Template: StoryFn<props> = (args) => <StepCheckoutTickets {...args} />;

export const Default = Template.bind({});