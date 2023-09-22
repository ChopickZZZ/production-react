import { render, screen } from "@testing-library/react";
import { AppButton, ButtonTheme } from "./AppButton";

describe("Button", () => {
  test("Plain button", () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("With clear theme", () => {
    render(<AppButton theme={ButtonTheme.CLEAR}>TEST</AppButton>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
