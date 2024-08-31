import { describe, expect, it } from "vitest";
import { DSSelect, DSSelectProps } from "./select.component";
import { renderWithWrapper } from "../../test/wrapper";
import { fireEvent } from "@testing-library/react";
import { Person } from "@mui/icons-material";

const defaultProps: DSSelectProps = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ],
  placeholder: "Select an option",
};

describe("Component: DSSelect", () => {
  it("should render default content", () => {
    const screen = renderWithWrapper(<DSSelect {...defaultProps} />);

    const select = screen.getByTestId("ds-select");
    const placeholder = screen.getByText("Select an option");

    expect(select).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  });

  it("should render default placeholder", () => {
    const screen = renderWithWrapper(
      <DSSelect {...defaultProps} placeholder="" />
    );

    const select = screen.getByTestId("ds-select");
    const placeholder = screen.getByText("Selecione uma opção");

    expect(select).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  });

  it("should be able to select an option", () => {
    const screen = renderWithWrapper(<DSSelect {...defaultProps} />);

    const select = screen.getByTestId("ds-select");
    fireEvent.mouseDown(select.firstChild as Element);

    const firstOption = screen.getByText("Option 1");
    fireEvent.click(firstOption);

    const placeholder = screen.queryAllByText("Select an option");

    expect(placeholder).toHaveLength(0);
  });

  it("should render start adornment", () => {
    const screen = renderWithWrapper(
      <DSSelect {...defaultProps} startAdornment={<Person />} />
    );

    const icon = screen.getByTestId("PersonIcon");
    expect(icon).toBeInTheDocument();
  });

  it("should render helper text", () => {
    const screen = renderWithWrapper(
      <DSSelect {...defaultProps} helperText="Campo obrigatório." error />
    );

    const helperText = screen.getByText("Campo obrigatório.");
    expect(helperText).toBeInTheDocument();
  });
});
