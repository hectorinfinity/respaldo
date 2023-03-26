import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ListCardEventRecommendation, { props } from './ListCardEventRecommendation';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/ListCardEventRecommendation',
  component: ListCardEventRecommendation,
} as Meta;

const Template: StoryFn<props> = (args) => <ListCardEventRecommendation {...args} />;

export const Default = Template.bind({});