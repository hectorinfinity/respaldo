import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ListCardEvent, { props } from './ListCardEvent';
import {faker} from '@faker-js/faker'

export default {
  title: 'Molecules/ListCardEvent',
  component: ListCardEvent,
} as Meta;

const Template: StoryFn<props> = (args) => <ListCardEvent {...args} />;

export const Default = Template.bind({});