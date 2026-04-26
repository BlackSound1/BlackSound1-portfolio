import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import CommitTracker from "@/components/ui/CommitTracker";

describe("CommitTracker", () => {
  it("renders a commit tracker", async () => {
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
  });
});
