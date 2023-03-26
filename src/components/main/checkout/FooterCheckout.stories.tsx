import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FooterCheckout, { props } from './FooterCheckout';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/FooterCheckout',
  component: FooterCheckout,
} as Meta;

const Template: StoryFn<props> = (args) => <FooterCheckout {...args} />;

export const Default = Template.bind({});