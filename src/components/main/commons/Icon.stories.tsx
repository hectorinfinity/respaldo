import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Icon, { props } from './Icon';
import { faker } from '@faker-js/faker';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta;

const Template: StoryFn<props> = (args) => <Icon {...args} />;

export const Default: StoryFn<props> = Template.bind({});
Default.args = {
  name: 'heart-outline',
};
