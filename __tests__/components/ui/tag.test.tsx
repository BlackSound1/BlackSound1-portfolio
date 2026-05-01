import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Tag from "@/components/ui/tag";
import { ThemeProvider } from "@/context/ThemeContext";

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
