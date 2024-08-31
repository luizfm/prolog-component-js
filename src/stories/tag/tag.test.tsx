import { describe, expect, it } from "vitest";
import { renderWithWrapper } from "../../test/wrapper";
import { DSTag, DSTagProps } from "./tag.component";

const defaultProps: DSTagProps = {
  label: "Hello world",
};

describe("Component: DSTag", () => {
  it("should render default content", () => {
    const screen = renderWithWrapper(<DSTag {...defaultProps} />);

    const tag = screen.getByText("Hello world");
    expect(tag).toBeInTheDocument();
  });
});
