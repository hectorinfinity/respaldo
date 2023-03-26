import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardProgramDetails, { props } from './CardProgramDetails';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/CardProgramDetails',
  component: CardProgramDetails,
} as Meta;

const Template: StoryFn<props> = (args) => <CardProgramDetails {...args} />;

export const Default = Template.bind({});
