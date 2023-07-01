import { render, screen } from "@testing-library/react";
import { AppButton, ThemeButton } from "./AppButton";

describe("Button", () => {
  test("Plain button", () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("With clear theme", () => {
    render(<AppButton theme={ThemeButton.CLEAR}>TEST</AppButton>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
