import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DSSelect } from "./select.component";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { SelectChangeEvent } from "@mui/material";

const meta = {
  title: "Components/Select",
  component: DSSelect,
  tags: ["autodocs"],
  args: { onChange: () => {} },
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

const Template = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const onChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <DSSelect
      selectedValue={selectedValue}
      onChange={onChange}
      options={options}
      placeholder="Selecione uma opção"
    />
  );
};

export const Standard: Story = {
  render: () => <Template />,
  args: {
    options,
    selectedValue: "",
    placeholder: "Nome",
  },
};

const StartAdornmentTemplate = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const onChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <DSSelect
      selectedValue={selectedValue}
      onChange={onChange}
      options={options}
      placeholder="Selecione uma opção"
      startAdornment={<CreateOutlinedIcon />}
    />
  );
};

export const WithStartAdornment: Story = {
  render: () => <StartAdornmentTemplate />,
  args: {
    options,
    placeholder: "Nome",
    selectedValue: "",
    startAdornment: <CreateOutlinedIcon />,
  },
};

const ErrorTemplate = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const onChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <DSSelect
      selectedValue={selectedValue}
      onChange={onChange}
      options={options}
      placeholder="Selecione uma opção"
      error
      helperText={"Campo obrigatório, preencha novamente."}
    />
  );
};

export const WithError: Story = {
  render: () => <ErrorTemplate />,
  args: {
    options,
    placeholder: "Nome",
    selectedValue: "",
    startAdornment: <CreateOutlinedIcon />,
    error: true,
    helperText: "Campo obrigatório, preencha novamente.",
  },
};
