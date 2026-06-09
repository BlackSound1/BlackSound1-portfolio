import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import CommitTracker from "@/components/ui/CommitTracker";

describe("CommitTracker", () => {
  // Make sure I can reset the `env` variable to whatever it was originally
  const originalEnv = process.env.NEXT_PUBLIC_ENV;

  afterEach(() => {
    process.env.NEXT_PUBLIC_ENV = originalEnv;
  });

  it("renders a commit tracker", async () => {
    process.env.NEXT_PUBLIC_ENV = "prod";
    expect(process.env.NEXT_PUBLIC_ENV).toBe("prod");

    // Create a mock version of the global fetch function
    // used in `trackCommit`. Can't just mock the whole
    // function because it's inside the component and
    // manips local state. But can mock the problematic part
    global.fetch = jest.fn().mockResolvedValue({
      // Response obj with json method
      json: jest.fn().mockResolvedValue([
        {
          sha: "0000000",
        },
      ]),
    });

    render(<CommitTracker />);

    // Wait for the state to be updated after the "fetch"
    await waitFor(() => {
      expect(screen.getByText("0000000")).toBeInTheDocument();
    });

    // Ensure "fetch" was called with correct API
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.github.com/repos/BlackSound1/BlackSound1-portfolio/commits?sha=main",
      expect.any(Object),
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Ensure the SVG is in the document
    const svg = await screen.findByTestId("commit-tracker-svg");
    expect(svg).toBeInTheDocument();
  });
});
