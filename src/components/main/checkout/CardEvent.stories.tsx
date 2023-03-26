import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardEventOrder, { props } from './CardEventOrder';
import {faker} from '@faker-js/faker'

export default {
  title: 'Molecules/CardEventOrder',
  component: CardEventOrder,
} as Meta;

const Template: StoryFn<props> = (args) => <CardEventOrder {...args} />;

export const Default = Template.bind({});