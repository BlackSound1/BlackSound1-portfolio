import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import NotFound from "@/app/not-found";

describe("Not Found", () => {
  it("should render the not found page", async () => {
    render(<NotFound />);

    const h2 = await screen.findByRole("heading", { level: 2 });
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent("[404]");

    const p = await screen.findByRole("paragraph");
    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent("This page does not exist!");

    const allLinks = await screen.findAllByRole("link");

    const gh = allLinks.find((link) => link.ariaLabel === "GitHub");
    expect(gh).toBeInTheDocument();
    expect(gh).toHaveTextContent("GitHub");
    expect(gh).toHaveAttribute("href", "https://github.com/BlackSound1");

    const li = allLinks.find((link) => link.ariaLabel === "LinkedIn");
    expect(li).toBeInTheDocument();
    expect(li).toHaveTextContent("LinkedIn");
    expect(li).toHaveAttribute("href", "https://www.linkedin.com/in/ordon/");
  });
});
