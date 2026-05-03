import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Footer from "@/components/cards/Footer";
import { getLogoSVG } from "@/lib/utils";

jest.mock("@/components/ui/CommitTracker", () => ({
  __esModule: true,
  default: () => (
    <div data-testid="mock commit tracker">
      <div data-testid="commit-tracker-svg">{getLogoSVG("commit")}</div>0000000
    </div>
  ),
}));

jest.mock("@/components/ui/ViewCounter", () => ({
  __esModule: true,
  default: () => <div data-testid="mock view counter">0</div>,
}));

describe("Footer", () => {
  beforeEach(() => render(<Footer />));

  it("should render the footer", async () => {
    const footer = await screen.findByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("Should render the copyright notice", async () => {
    const c = await screen.findByTestId("copyright notice");
    expect(c).toBeInTheDocument();
  });

  it("should render the commit tracker", async () => {
    const commitTracker = await screen.findByTestId("mock commit tracker");
    expect(commitTracker).toBeInTheDocument();
    expect(commitTracker.textContent).toBe("0000000");
  });

  it("should render the view counter", async () => {
    const viewCounter = await screen.findByTestId("mock view counter");
    expect(viewCounter).toBeInTheDocument();
    expect(viewCounter.textContent).toBe("0");
  });

  it("should render the SVGs", async () => {
    const svg = await screen.findByTestId("commit-tracker-svg");
    expect(svg).toBeInTheDocument();
  });
});
