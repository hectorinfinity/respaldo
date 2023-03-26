import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SidebarCheckout, { props } from './SidebarCheckout';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/SidebarCheckout',
  component: SidebarCheckout,
} as Meta;

const Template: StoryFn<props> = (args) => <SidebarCheckout {...args} />;

export const Default = Template.bind({});