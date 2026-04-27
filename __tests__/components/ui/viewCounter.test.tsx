import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import ViewCounter from "@/components/ui/ViewCounter";

describe("ViewCounter", () => {
  it("renders a view counter", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        value: 0,
      }),
    });

    render(<ViewCounter />);

    await waitFor(() => {
      expect(screen.getByTestId("view-counter")).toHaveTextContent(/0 views/);
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "https://abacus.jasoncameron.dev/hit/blacksound1-portfolio.vercel.app/visits",
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
