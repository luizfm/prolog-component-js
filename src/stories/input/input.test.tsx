import { describe, expect, it } from "vitest";
import { renderWithWrapper } from "../../test/wrapper";
import { DSInput } from "./input.component";
import { fireEvent } from "@testing-library/react";
import { Person } from "@mui/icons-material";

describe("Component: DSInput", () => {
  it("should render the input", () => {
    const screen = renderWithWrapper(<DSInput />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should be able to type values in the input", () => {
    const screen = renderWithWrapper(<DSInput />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Hello world" } });

    expect(input).toHaveValue("Hello world");
  });

  it("should render error state", () => {
    const screen = renderWithWrapper(
      <DSInput error helperText="Campo obrigatório." />
    );

    const helperText = screen.getByText("Campo obrigatório.");
    expect(helperText).toBeInTheDocument();
  });

  it("should render start icon", () => {
    const screen = renderWithWrapper(<DSInput icon={Person} />);

    const personIcon = screen.getByTestId("PersonIcon");
    expect(personIcon).toBeInTheDocument();
  });
});
