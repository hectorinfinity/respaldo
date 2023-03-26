import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderSearch, { props } from './HeaderSearch';
import {faker} from '@faker-js/faker'

export default {
  title: 'Molecules/HeaderSearch',
  component: HeaderSearch,
} as Meta;

const Template: StoryFn<props> = (args) => <HeaderSearch {...args} />;

export const Default = Template.bind({});