
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderQueue, { props } from './HeaderQueue';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/HeaderQueue',
  component: HeaderQueue,
} as Meta;

const Template: StoryFn<props> = (args) => <HeaderQueue {...args} />;

export const Default = Template.bind({});