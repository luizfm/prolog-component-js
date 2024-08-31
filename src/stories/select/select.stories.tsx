import { Meta, StoryObj } from "@storybook/react";
import { DSSelect } from "./select.component";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const meta = {
  title: "Components/Select",
  component: DSSelect,
} satisfies Meta<typeof DSSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    label: "Check List",
    value: "CHECK_LIST",
  },
  {
    label: "Orçamentos",
    value: "QUOTATION",
  },
  {
    label: "Dúvidas",
    value: "QUESTIONS",
  },
];

export const Standard: Story = {
  args: {
    options,
    placeholder: "Nome",
  },
};

export const WithStartAdornment: Story = {
  args: {
    options,
    placeholder: "Nome",
    startAdornment: <CreateOutlinedIcon />,
  },
};

export const WithError: Story = {
  args: {
    options,
    placeholder: "Nome",
    startAdornment: <CreateOutlinedIcon />,
    error: true,
    helperText: "Campo obrigatório, preencha novamente.",
  },
};
