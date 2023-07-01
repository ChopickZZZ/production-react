import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {},
  args: { to: "/", children: "TEST" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { theme: AppLinkTheme.PRIMARY },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Secondary: Story = {
  args: { theme: AppLinkTheme.SECONDARY },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  args: { theme: AppLinkTheme.PRIMARY },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: { theme: AppLinkTheme.SECONDARY },
  decorators: [ThemeDecorator(Theme.DARK)],
};
