import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import ThemeDropdown from "@/components/ui/ThemeDropdown";
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
    const dropdown = await screen.findByText("Default");
    expect(dropdown).toBeInTheDocument();
  });

  it("should open the dropdown when clicked", async () => {
    const dropdown = await screen.findByText("Default");
    fireEvent.click(dropdown);
    const dropdownOptions = await screen.findByTestId("open");
    expect(dropdownOptions).toBeInTheDocument();
  });

  it("should select a theme from the dropdown", async () => {
    const dropdown = await screen.findByText("Default");
    fireEvent.click(dropdown);
    const catpuccinOption = await screen.findByText(/catpuccin/i);
    fireEvent.click(catpuccinOption);
    const selectedTheme = await screen.findByText(/catpuccin/i);
    expect(selectedTheme).toBeInTheDocument();
  });

  it("should blur the dropdown when click outside it", async () => {
    const dropdown = await screen.findByText("Default");
    fireEvent.click(dropdown);
    fireEvent.blur(dropdown);
    // Wait a sec for the dropdown to close
    setTimeout(() => {
      const dropdownOptions = screen.findByTestId("open");
      expect(dropdownOptions).not.toBeInTheDocument();
    }, 1000);
  });
});
