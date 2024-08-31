import { describe, expect, it } from "vitest";
import { DSButton } from "./button.component";
import { renderWithWrapper } from "../../test/wrapper";

describe("Component: DSButton", () => {
  it("should render the button", () => {
    const screen = renderWithWrapper(<DSButton>Button</DSButton>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
