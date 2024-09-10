import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit alias dolores dolor labore animi maiores hic aperiam, dicta modi rem!",
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit alias dolores dolor labore animi maiores hic aperiam, dicta modi rem!",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
