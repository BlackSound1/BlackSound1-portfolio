import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Tag, { _fetchRandomColor } from "@/components/ui/tag";
import { ThemeProvider } from "@/context/ThemeContext";
import { tagColorMap } from "@/lib/utils";

describe("Tag", () => {
  it("renders a tag", async () => {
    render(
      <ThemeProvider>
        <Tag lang="test" key="test" />
      </ThemeProvider>,
    );
    const tag = await screen.findByTestId("tag");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass("tag");
    expect(tag.textContent).toBe("test");
  });
});

describe("_fetchRandomColor", () => {
  it("should return a proper color when theme is well-defined", () => {
    const theme = "catpuccin-latte";
    const color = _fetchRandomColor(theme);
    expect(color).toBeDefined();
    expect(color.length).toBeGreaterThan(0);
    expect(tagColorMap[theme]).toContain(color);
  });

  it("should return a default color when theme is invalid", () => {
    const theme = "test";
    const color = _fetchRandomColor(theme);
    expect(color).toBeDefined();
    expect(color.length).toBeGreaterThan(0);
    expect(tagColorMap["default-default"]).toContain(color);
  });
});
