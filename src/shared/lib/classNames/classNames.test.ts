import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    expect(classNames("someClass", {}, ["added", "anotherClass"])).toBe(
      "someClass added anotherClass"
    );
  });

  test("with modds", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "added",
        "anotherClass",
      ])
    ).toBe("someClass added anotherClass hovered scrollable");
  });

  test("with mods false", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, [
        "added",
        "anotherClass",
      ])
    ).toBe("someClass added anotherClass hovered");
  });

  test("with mods undefined", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, [
        "added",
        "anotherClass",
      ])
    ).toBe("someClass added anotherClass hovered");
  });
});
