import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: "primary",
  },
  render: (props) => <Button {...props}>Primary</Button>,
};
