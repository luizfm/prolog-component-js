import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DSButton } from "./button.component";
import TireRepairIcon from "@mui/icons-material/TireRepair";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: DSButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: "boolean" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof DSButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Outlined: Story = {
  args: {
    children: "Button",
    variant: "outlined",
    size: "small",
  },
};

export const Contained: Story = {
  args: {
    children: "Button",
    variant: "contained",
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    variant: "text",
  },
};

export const TextWithIcon: Story = {
  args: {
    children: "Button",
    variant: "text",
    icon: <TireRepairIcon />,
  },
};

export const SmallContainedWithIcon: Story = {
  args: {
    children: "Button",
    variant: "contained",
    size: "small",
    icon: <TireRepairIcon />,
  },
};
