import "@testing-library/jest-dom";
import { fireEvent, queryByTestId, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";

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
    const catpuccinOption = await screen.findByText(/catpuccin/i);
    fireEvent.click(catpuccinOption);
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

describe("Variant Dropdown", () => {
  beforeEach(() =>
    render(
      <ThemeProvider>
        <ThemeDropdown />
        <VariantDropdown />
      </ThemeProvider>,
    ),
  );

  it("should render a variant dropdown", async () => {
    const dropdown = await screen.findByTestId("variant dropdown");
    expect(dropdown).toBeInTheDocument();
  });

  it("should open the dropdown when clicked", async () => {
    const dropdown = await screen.findByTestId("variant dropdown");
    fireEvent.click(dropdown);
    const dropdownOptions = await screen.findByTestId("variant open");
    expect(dropdownOptions).toBeInTheDocument();
  });

  it("should select a variant from the dropdown", async () => {
    const themeDropdown = await screen.findByTestId("theme dropdown");
    fireEvent.click(themeDropdown);

    // Select the Catpuccin theme from the theme dropdown
    const catpuccinTheme = await screen.findByText(/catpuccin/i);
    fireEvent.click(catpuccinTheme);

    const variantDropdown = await screen.findByTestId("variant dropdown");
    fireEvent.click(variantDropdown);

    // Select the Mocha variant from the variant dropdown
    const mochaOption = await screen.findByText(/mocha/i);
    fireEvent.click(mochaOption);

    // Once the dropdown closes, Mocha should still be on the screen
    await waitFor(() => {
      const variantDropdownAfter = screen.getByTestId("variant dropdown");
      expect(variantDropdownAfter.textContent).toBe("Mocha");
    });
  });

  it.failing("should blur the dropdown when click outside it", async () => {
    const dropdown = await screen.findByTestId("variant dropdown");
    fireEvent.click(dropdown);
    fireEvent.blur(dropdown);
    // It should fail to find the element
    await screen.findByTestId("open");
  });
});
