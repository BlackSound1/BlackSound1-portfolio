import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Heading from "@/components/ui/Heading";

describe("Headings", () => {
  it("renders an H1", async () => {
    render(<Heading level={1} text="test" />);

    const h1 = await screen.findByRole("heading", { level: 1 });

    expect(h1).toBeInTheDocument();

    expect(h1.textContent).toBe("test");
  });

  it("renders an H2", async () => {
    render(<Heading level={2} text="test" />);

    const h2 = await screen.findByRole("heading", { level: 2 });

    expect(h2).toBeInTheDocument();

    expect(h2.textContent).toBe("test");
  });

  it("renders an H3", async () => {
    render(<Heading level={3} text="test" />);

    const h3 = await screen.findByRole("heading", { level: 3 });

    expect(h3).toBeInTheDocument();

    expect(h3.textContent).toBe("test");
  });

  it("renders a non-heading", async () => {
    render(<Heading text="test" />);

    const p = await screen.findByRole("paragraph");

    expect(p).toBeInTheDocument();

    expect(p.textContent).toBe("test");

    expect(p.style.color).toBe("red");
    expect(p.style.fontWeight).toBe("bold");
  });
});
