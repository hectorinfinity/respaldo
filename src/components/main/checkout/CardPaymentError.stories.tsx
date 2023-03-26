import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardPaymentError, { props } from './CardPaymentError';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/CardPaymentError',
  component: CardPaymentError,
} as Meta;

const Template: StoryFn<props> = (args) => <CardPaymentError {...args} />;

export const Default = Template.bind({});