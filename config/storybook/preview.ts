import type { Preview } from "@storybook/react";
import { withScreenshot } from 'storycap'
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { Theme } from "app/providers/ThemeProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // @ts-ignore
  decorators: [withScreenshot, StyleDecorator, RouterDecorator, ThemeDecorator(Theme.LIGHT)],
};

export default preview;
