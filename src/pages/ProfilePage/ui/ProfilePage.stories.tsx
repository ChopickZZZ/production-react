import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
