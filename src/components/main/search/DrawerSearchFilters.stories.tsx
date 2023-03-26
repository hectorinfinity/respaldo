import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DrawerSearchFilters, { props } from './DrawerSearchFilters';
import {faker} from '@faker-js/faker'

export default {
  title: 'Molecules/DrawerSearchFilters',
  component: DrawerSearchFilters,
} as Meta;

const Template: StoryFn<props> = (args) => <DrawerSearchFilters {...args} />;

export const Default = Template.bind({});