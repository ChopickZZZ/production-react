import { ThemeProvider, type Theme } from "app/providers/ThemeProvider";
import { type StoryFn } from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
