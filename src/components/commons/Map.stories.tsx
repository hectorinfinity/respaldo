import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Map, { props } from './Map';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/Map',
  component: Map,
} as Meta;

const Template: StoryFn<props> = (args) => <Map className="aspect-video" {...args} />;

export const Default = Template.bind({});
Default.args = {
  center: {
    lat: 40.7127281,
    lng: -74.0060152,
  },
  zoom: 15,
};
