import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardEventDetails, { props } from './CardEventDetails';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/CardEventDetails',
  component: CardEventDetails,
} as Meta;

const Template: StoryFn<props> = (args) => <CardEventDetails {...args} />;

export const Default = Template.bind({});