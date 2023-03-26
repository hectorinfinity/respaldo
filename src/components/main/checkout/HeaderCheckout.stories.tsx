import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderCheckout, { props } from './HeaderCheckout';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/HeaderCheckout',
  component: HeaderCheckout,
} as Meta;

const Template: StoryFn<props> = (args) => <HeaderCheckout {...args} />;

export const Default = Template.bind({});