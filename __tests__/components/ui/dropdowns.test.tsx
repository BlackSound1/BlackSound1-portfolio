import "@testing-library/jest-dom";
import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";

import ThemeDropdown from "@/components/ui/ThemeDropdown";
import VariantDropdown from "@/components/ui/VariantDropdown";
import { ThemeProvider } from "@/context/ThemeContext";

describe("Theme Dropdown", () => {
  beforeEach(() =>
    render(
      <ThemeProvider>
        <ThemeDropdown />
      </ThemeProvider>,
    ),
  );

  it("should render a theme dropdown", async () => {
    const dropdown = await screen.findByTestId("theme dropdown");
    expect(dropdown).toBeInTheDocument();
  });

  it("should open the dropdown when clicked", async () => {
    const dropdown = await screen.findByTestId("theme dropdown");
    fireEvent.click(dropdown);
    const dropdownOptions = await screen.findByTestId("theme open");
    expect(dropdownOptions).toBeInTheDocument();
  });

  it("should select a theme from the dropdown", async () => {
    const dropdown = await screen.findByTestId("theme dropdown");
    fireEvent.click(dropdown);
    // setTimeout(async () => {
    // }, 1000);
    const catpuccinOption = await screen.findByText(/catpuccin/i);
    fireEvent.click(catpuccinOption);
    // setTimeout(async () => {
    // }, 100);
    const selectedTheme = await screen.findByText(/catpuccin/i);
    expect(selectedTheme).toBeInTheDocument();
  });

  it.failing("should blur the dropdown when click outside it", async () => {
    const dropdown = await screen.findByTestId("theme dropdown");
    fireEvent.click(dropdown);
    fireEvent.blur(dropdown);
    // It should fail to find the element
    await screen.findByTestId("open");
  });
});
