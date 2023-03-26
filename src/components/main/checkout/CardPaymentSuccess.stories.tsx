import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardPaymentSuccess, { props } from './CardPaymentSuccess';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/CardPaymentSuccess',
  component: CardPaymentSuccess,
} as Meta;

const Template: StoryFn<props> = (args) => <CardPaymentSuccess {...args} />;

export const Default = Template.bind({});
