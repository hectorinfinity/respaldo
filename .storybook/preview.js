import React from 'react'
import  { Preview } from "@storybook/react";
import { NextIntlProvider } from "next-intl";
import messages from "../src/messages/en.json";

import "../src/styles/globals.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <NextIntlProvider locale='en' messages={messages}>
      <Story />
    </NextIntlProvider>
  ),
];

export default preview;
