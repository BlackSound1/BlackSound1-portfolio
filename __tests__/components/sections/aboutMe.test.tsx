import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import AboutMeSection from "@/components/sections/AboutMeSection";

describe("AboutMeSection", () => {
  beforeEach(() => render(<AboutMeSection />));

  it("should render the About Me section", async () => {
    const section = await screen.findByTestId("about-me-section");
    expect(section).toBeInTheDocument();
  });

  it("should render the social links", async () => {
    const links = await screen.findAllByRole("link");
    expect(links.length).toBe(2);

    const gh = links.find((link) => link.ariaLabel === "GitHub");
    expect(gh).toBeInTheDocument();
    expect(gh).toHaveAttribute("href", "https://github.com/BlackSound1");
    expect(gh).toHaveAttribute("rel", "noopener noreferrer");
    expect(gh).toHaveAttribute("target", "_blank");
    expect(gh?.textContent).toBe("GitHub");

    const li = links.find((link) => link.ariaLabel === "LinkedIn");
    expect(li).toBeInTheDocument();
    expect(li).toHaveAttribute("href", "https://www.linkedin.com/in/ordon/");
    expect(li).toHaveAttribute("rel", "noopener noreferrer");
    expect(li).toHaveAttribute("target", "_blank");
    expect(li?.textContent).toBe("LinkedIn");
  });
});
