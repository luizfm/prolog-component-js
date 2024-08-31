import { Meta, StoryObj } from "@storybook/react";
import { DSTag } from "./tag.component";

const meta = {
  title: "Components/Tag",
  component: DSTag,
  tags: ["autodocs"],
} satisfies Meta<typeof DSTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Tag",
  },
};
