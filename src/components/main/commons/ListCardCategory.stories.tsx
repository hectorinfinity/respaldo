import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ListCardCategory, { props } from './ListCardCategory';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/ListCardCategory',
  component: ListCardCategory,
} as Meta;

const Template: StoryFn<props> = (args) => <ListCardCategory {...args} />;

export const Default = Template.bind({});