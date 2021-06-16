import React from "react";

import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import store from "../reducer";

import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

import theme from "./theme";
import Reset from "./reset";

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Reset />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
