import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Lorem title",
    text: "Lorem text",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Lorem title",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Lorem text",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Lorem title",
    text: "Lorem text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: "Lorem title",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: {
    text: "Lorem text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextError: Story = {
  args: {
    title: "Lorem text",
    text: "Lorem logn text",
    theme: TextTheme.ERROR
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
