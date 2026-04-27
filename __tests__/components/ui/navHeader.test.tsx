import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from "@/components/ui/NavHeader";

describe("NavHeader", () => {
  it("renders the NavHeader", async () => {
    render(<Header />);

    const allLinks = await screen.findAllByRole("link");

    expect(allLinks.length).toBe(4);

    const home = screen.getByText("~/_");
    const research = screen.getByText("Research");
    const uses = screen.getByText("Uses");
    const links = screen.getByText("Links");

    expect(home).toBeInTheDocument();
    expect(research).toBeInTheDocument();
    expect(uses).toBeInTheDocument();
    expect(links).toBeInTheDocument();
  });
});
