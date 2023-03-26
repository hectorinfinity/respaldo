import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderCategory, { props } from './HeaderCategory';
import {faker} from '@faker-js/faker'

export default {
  title: 'Molecules/HeaderCategory',
  component: HeaderCategory,
} as Meta;

const Template: StoryFn<props> = (args) => <HeaderCategory {...args} />;

export const Default = Template.bind({});