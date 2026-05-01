import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SocialLink from "@/components/ui/SocialLink";

describe("SocialLink", () => {
  it("renders a social link", async () => {
    render(<SocialLink url="test" name="test" />);

    const link = await screen.findByRole("link");

    expect(link).toBeInTheDocument();

    expect(link).toHaveRole("link");

    expect(link).toHaveProperty("href");

    expect(link.textContent).toBe("test");

    expect(link).toHaveProperty("target");
    expect(link.ariaLabel).toBe("test");

    expect(link).toHaveAttribute("href", "test");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");

    const svgIcon = link.querySelector("svg");
    expect(svgIcon).toBeInTheDocument();
  });
});
