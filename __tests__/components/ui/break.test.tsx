import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Break from "@/components/ui/break";

describe("Break", () => {
  it("renders a Break", async () => {
    render(<Break />);

    const hr = await screen.findByRole("separator");

    expect(hr).toBeInTheDocument();
  });
});
