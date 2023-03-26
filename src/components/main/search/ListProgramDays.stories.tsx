
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ListProgramDays, { props } from './ListProgramDays';
import {faker} from '@faker-js/faker'

export default {
  title: 'Molecules/ListProgramDays',
  component: ListProgramDays,
} as Meta;

const Template: StoryFn<props> = (args) => <ListProgramDays {...args} />;

export const Default = Template.bind({});