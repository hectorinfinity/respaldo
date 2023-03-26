import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardCategory, { props } from './CardCategory';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/CardCategory',
  component: CardCategory,
} as Meta;

const Template: StoryFn<props> = (args) => (
  <div className="p-10">
    <CardCategory {...args} />
  </div>
);

export const Small: StoryFn<props> = Template.bind({});
Small.args = {
  size: 'small',
  color: faker.internet.color(),
  image: faker.image.cats(),
  name: faker.commerce.productName(),
};

export const Large: StoryFn<props> = Template.bind({});
Large.args = {
  size: 'large',
  color: faker.internet.color(),
  image: faker.image.cats(),
  name: faker.commerce.productName(),
};
