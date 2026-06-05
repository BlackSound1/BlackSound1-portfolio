import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import NotFound from "@/app/not-found";

describe("Not Found", () => {
  beforeEach(() => render(<NotFound />));

  it("should render the heading", async () => {
    const h1 = await screen.findByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1.textContent).toBe("[404]");
  });

  it("should render the paragraph", async () => {
    const p = await screen.findByRole("paragraph");
    expect(p).toBeInTheDocument();
    expect(p.textContent).toBe("This page does not exist!");
  });

  it("should render the social links", async () => {
    const allLinks = await screen.findAllByRole("link");

    const gh = allLinks.find((link) => link.ariaLabel === "GitHub");
    expect(gh).toBeInTheDocument();
    expect(gh?.textContent).toBe("GitHub");
    expect(gh).toHaveAttribute("href", "https://github.com/BlackSound1");

    const li = allLinks.find((link) => link.ariaLabel === "LinkedIn");
    expect(li).toBeInTheDocument();
    expect(li?.textContent).toBe("LinkedIn");
    expect(li).toHaveAttribute("href", "https://www.linkedin.com/in/ordon/");
  });
});
