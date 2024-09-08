import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Sidebar", () => {
  test("DOM", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Sidebar toggle", () => {
    componentRender(<Sidebar />, { route: "/" });
    const btn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
