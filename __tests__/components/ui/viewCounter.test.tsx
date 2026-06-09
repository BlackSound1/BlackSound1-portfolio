import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import ViewCounter from "@/components/ui/ViewCounter";

describe("ViewCounter", () => {
  // Make sure I can reset the `env` variable to whatever it was originally
  const originalEnv = process.env.NEXT_PUBLIC_ENV;

  afterEach(() => {
    process.env.NEXT_PUBLIC_ENV = originalEnv;
  });

  it("renders a view counter", async () => {
    process.env.NEXT_PUBLIC_ENV = "prod";
    expect(process.env.NEXT_PUBLIC_ENV).toBe("prod");

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
      expect.any(Object), // The AbortController
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
