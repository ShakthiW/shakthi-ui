import type { Meta, StoryObj } from "@storybook/react";
import { LogInForm } from "./LogInForm";

const meta: Meta<typeof LogInForm> = {
  title: "Examples/Form",
  component: LogInForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {};