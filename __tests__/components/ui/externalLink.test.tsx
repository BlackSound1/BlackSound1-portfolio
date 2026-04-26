import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ExternalLink from "@/components/ui/ExternalLink";

describe("ExternalLink", () => {
  it("renders an external link", async () => {
    render(<ExternalLink url="test" description="test" />);

    const link = await screen.findByRole("link");

    expect(link).toBeInTheDocument();

    expect(link).toHaveRole("link");

    expect(link).toHaveProperty("href");

    expect(link).toHaveTextContent("test");

    const svgIcon = link.querySelector("svg");
    expect(svgIcon).toBeInTheDocument();

    expect(svgIcon).toHaveClass("icon-tabler-link");
  });
});
