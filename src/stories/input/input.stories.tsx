import { Meta, StoryObj } from "@storybook/react";
import { DSInput } from "./input.component";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const meta = {
  title: "Components/Input",
  component: DSInput,
} satisfies Meta<typeof DSInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    label: "Nome",
    placeholder: "Nome",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Nome",
    placeholder: "Nome",
    icon: PersonOutlineIcon,
  },
};

export const WithError: Story = {
  args: {
    label: "Nome",
    placeholder: "Nome",
    error: true,
    helperText: "Campo obrigatório, preencha novamente.",
  },
};
