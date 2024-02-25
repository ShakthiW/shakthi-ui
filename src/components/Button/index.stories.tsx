import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/*
export const Default: Story = {
  args: {
    children: "Click Me",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
  },
};
*/

// solid button
export const Solid: Story = {
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
  },
};

// outlined button
export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    size: "md",
    colorscheme: "primary",
  },
};

// Ghost button
export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
    size: "md",
    colorscheme: "primary",
  },
};