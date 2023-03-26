import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SidebarEvent, { props } from './SidebarEvent';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/SidebarEvent',
  component: SidebarEvent,
} as Meta;

const Template: StoryFn<props> = (args) => <SidebarEvent {...args} />;

export const Default = Template.bind({});