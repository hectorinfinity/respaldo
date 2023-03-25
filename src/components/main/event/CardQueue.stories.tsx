import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardQueue, { props } from './CardQueue';
import {faker} from '@faker-js/faker'

export default {
  title: 'Molecules/CardQueue',
  component: CardQueue,
} as Meta;

const Template: StoryFn<props> = (args) => <CardQueue {...args} />;

export const Default = Template.bind({});