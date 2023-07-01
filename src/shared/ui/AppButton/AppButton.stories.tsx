import type { Meta, StoryObj } from "@storybook/react";
import { AppButton, ThemeButton } from "./AppButton";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppButton",
  component: AppButton,
  tags: ["autodocs"],
  argTypes: {
    theme: { control: "color" },
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineDark: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
