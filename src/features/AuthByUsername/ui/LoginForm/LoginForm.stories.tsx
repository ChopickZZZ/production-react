import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const loginForm = {
  username: "username",
  password: "password",
} as const;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm })],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm })],
};

export const WithError: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { error: "Invalid credentials" } })],
};

export const DarkWithError: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { error: "Invalid credentials" } }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
};
