import type { Meta, StoryObj } from "@storybook/react";
import { SidebarItem } from "./SidebarItem";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { SidebarItemsList } from "widgets/Sidebar/model/items";

const meta = {
  title: "widgets/SidebarItem",
  component: SidebarItem,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { item: SidebarItemsList[0], collapsed: false },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};

export const Dark: Story = {
  args: { item: SidebarItemsList[0], collapsed: false },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
