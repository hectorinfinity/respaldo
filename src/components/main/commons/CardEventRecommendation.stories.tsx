import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardEventRecommendation, { props } from './CardEventRecommendation';
import {faker} from '@faker-js/faker'

export default {
  title: 'Molecules/CardEventRecommendation',
  component: CardEventRecommendation,
} as Meta;

const Template: StoryFn<props> = (args) => <CardEventRecommendation {...args} />;

export const Default = Template.bind({});